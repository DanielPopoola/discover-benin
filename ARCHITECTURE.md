# Architecture

This document explains how Discover Benin is structured and how data flows through the system.

## High-level components

```text
┌───────────────────────┐     HTTP/JSON + SSE      ┌────────────────────────┐
│ Frontend (React/Vite) │ ───────────────────────▶ │ Backend (FastAPI)      │
│ - Routes & pages      │                          │ - Routers              │
│ - API client          │ ◀─────────────────────── │ - Pydantic schemas     │
│ - UI state            │       JSON payloads      │ - SQLModel ORM         │
└───────────────────────┘                          └──────────┬─────────────┘
                                                              │
                                                              │ SQLModel
                                                              ▼
                                                    ┌────────────────────────┐
                                                    │ SQLite database        │
                                                    │ - attractions table    │
                                                    │ - hotels table         │
                                                    │ - restaurants table    │
                                                    └────────────────────────┘
```

## Frontend architecture

- Built with React + TypeScript and Vite.
- Uses `react-router` for route-level page composition.
- Calls backend through `src/lib/api.ts`, which centralizes all HTTP logic.
- Normalizes backend `slug` fields into frontend `id` fields at the API boundary.

### Frontend route map

- `/` → home page
- `/attractions` and `/attractions/:id`
- `/hotels` and `/hotels/:id`
- `/restaurants`
- `/travel-guide`
- `/contact`

## Backend architecture

- FastAPI app with startup lifespan hook.
- On startup:
  1. Creates SQLModel tables.
  2. Seeds curated baseline records.
- Routers are separated by domain:
  - `attractions`
  - `hotels`
  - `restaurants`
  - `ai`
- Read schemas are Pydantic models configured for alias-based camelCase output.

## Data model

Core entities:
- `Attraction`
- `Hotel`
- `Restaurant`

Design choices:
- `slug` is the primary key for all entities.
- Nested list/object fields are stored as JSON columns.
- Records include `created_at` timestamps.

## Request/response flow

### Standard REST flow

1. A page calls a function from `frontend/src/lib/api.ts`.
2. The client requests `GET /api/...`.
3. FastAPI router builds a SQLModel query and executes it.
4. ORM model is serialized with read schema aliases.
5. Frontend normalizes each payload item (`slug` → `id`) and renders.

### AI streaming flow (SSE)

1. Frontend posts `{ message }` to `POST /api/ai/recommend`.
2. Backend opens a Gemini stream using `google-genai`.
3. Backend emits each text chunk as `data: ...\n\n`.
4. Frontend reads stream chunks and appends text incrementally.
5. Stream ends with `data: [DONE]`.

## Cross-cutting concerns

### CORS

Backend currently allows local Vite origins (`5173` dev, `4173` preview).

### Idempotent startup

`create_db_and_tables()` and `seed()` are designed to be safe across restarts.

### Error handling

- Missing slug resources return HTTP 404.
- Frontend API client throws on non-OK status and page components handle failures.

## Deployment shape

Recommended production layout:

- Build and serve frontend assets via CDN/Nginx.
- Run FastAPI behind a process manager (e.g., Uvicorn/Gunicorn).
- Reverse-proxy `/api` to backend service.
- Use managed PostgreSQL when scaling beyond single-node SQLite usage.
