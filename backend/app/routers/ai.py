import os
from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="/api/ai", tags=["ai"])

# Instantiated once at module load — not per-request
_client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

SYSTEM_PROMPT = (
    "You are a travel assistant for Discover Benin, a tourism platform for the Republic of Benin, "
    "West Africa. Answer questions about destinations, culture, food, transport, and travel in Benin "
    "concisely and helpfully. Focus on practical information that helps travellers plan their visit. "
    "Do not answer questions unrelated to Benin or travel."
)

# Config is built once — system_instruction and max_output_tokens are static
_config = types.GenerateContentConfig(
    system_instruction=SYSTEM_PROMPT,
    max_output_tokens=1024,
)


class RecommendRequest(BaseModel):
    message: str


def stream_response(message: str):
    """Generator that yields SSE-formatted chunks from the Gemini stream.

    generate_content_stream returns an Iterator[GenerateContentResponse].
    Each chunk exposes .text — a convenience property that extracts the
    first candidate's first part text, which is all we need here.
    """
    for chunk in _client.models.generate_content_stream(
        model="gemini-2.5-flash-lite",
        contents=message,
        config=_config,
    ):
        if chunk.text:
            yield f"data: {chunk.text}\n\n"
    yield "data: [DONE]\n\n"


@router.post("/recommend")
def recommend(body: RecommendRequest):
    return StreamingResponse(
        stream_response(body.message),
        media_type="text/event-stream",
        headers={
            # Prevent nginx/proxies from buffering the stream
            "X-Accel-Buffering": "no",
            "Cache-Control": "no-cache",
        },
    )