# Development Setup

## Prerequisites

- Node.js 18+
- npm 9+
- Python 3.12+

## Backend setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

Create `backend/.env`:

```env
DATABASE_URL=sqlite:///./discover_benin.db
GEMINI_API_KEY=your_api_key_here
```

Run server:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Useful endpoints:
- Health check: `http://localhost:8000/health`
- Swagger docs: `http://localhost:8000/docs`

## Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Frontend dev URL: `http://localhost:5173`

## Full local run checklist

1. Start backend on port `8000`.
2. Start frontend on port `5173`.
3. Open homepage and verify listings load.
4. If AI section is used, ensure `GEMINI_API_KEY` is configured.

## Troubleshooting

### CORS issues

Ensure frontend runs on `5173` or `4173`, or update allowed origins in backend middleware.

### Empty/failed AI responses

- Confirm `GEMINI_API_KEY` is present.
- Check backend logs for upstream API errors.
- Verify outbound network access for backend runtime.

### Database reset

For SQLite local reset:

```bash
rm backend/discover_benin.db
```

Then restart backend to recreate schema and reseed.
