# Discover Benin

Discover Benin is a full-stack tourism platform for exploring destinations, hotels, and restaurants across the Republic of Benin.

It includes:
- A **React + Vite frontend** for browsing destinations and planning travel.
- A **FastAPI backend** exposing REST endpoints for attractions, hotels, restaurants, and AI-powered recommendations.
- A **SQLite/SQLModel data layer** seeded automatically on startup.

## Monorepo structure

```text
.
├── frontend/            # Vite + React application
├── backend/             # FastAPI + SQLModel API
├── ARCHITECTURE.md      # System architecture and request flow
└── docs/                # Operational and API documentation
```

## Features

- Curated listings for attractions, hotels, and restaurants.
- Detail pages resolved by human-friendly slugs.
- Search/filter support via backend query parameters.
- AI travel assistant endpoint (server-sent event stream).
- Backend startup lifecycle that creates tables and seeds initial data.

## Quick start

### 1) Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e .
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend is available at `http://localhost:8000`.

### 2) Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend is available at `http://localhost:5173`.

## Environment variables

Create a `.env` file in `backend/` for local development:

```env
DATABASE_URL=sqlite:///./discover_benin.db
GEMINI_API_KEY=your_api_key_here
```

- `DATABASE_URL` is optional (defaults to local SQLite).
- `GEMINI_API_KEY` is required for `/api/ai/recommend`.

## Key endpoints

- `GET /health`
- `GET /api/attractions`
- `GET /api/attractions/{slug}`
- `GET /api/hotels`
- `GET /api/hotels/{slug}`
- `GET /api/restaurants`
- `GET /api/restaurants/{slug}`
- `POST /api/ai/recommend` (SSE)

See [`docs/API.md`](docs/API.md) for details.

## Documentation index

- [Architecture](ARCHITECTURE.md)
- [Development setup](docs/SETUP.md)
- [API reference](docs/API.md)
- [Data model and seeding](docs/DATA_MODEL.md)

## Production notes

- Restrict CORS origins to your deployment domains.
- Put FastAPI behind a reverse proxy (Nginx/Caddy).
- Ensure SSE proxy buffering is disabled for AI streaming.
- Consider migrating from SQLite to PostgreSQL for multi-instance deployments.
