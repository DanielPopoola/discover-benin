import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from app.database import create_db_and_tables
from app.seed import seed
from app.routers import attractions, hotels, restaurants, ai


load_dotenv()


raw_origins = os.getenv("CORS_ORIGINS", "")
origins = [o.strip() for o in raw_origins.split(",") if o.strip()]


if not origins:
    origins = [
        "http://localhost:5173",
        "http://localhost:4173",
    ]


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Runs once on startup — creates tables then seeds data
    # Both operations are idempotent so restarting never duplicates records
    create_db_and_tables()
    seed()
    yield
    # Teardown (if needed) goes here


app = FastAPI(
    title="Discover Benin API",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS — allow the Vite dev server and production domain
# In production, replace or extend this list with your actual domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# Register all routers
app.include_router(attractions.router)
app.include_router(hotels.router)
app.include_router(restaurants.router)
app.include_router(ai.router)


@app.get("/health")
def health():
    return {"status": "ok"}
