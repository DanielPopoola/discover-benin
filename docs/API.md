# API Reference

Base URL (local): `http://localhost:8000`

## Health

### `GET /health`

Returns service status.

**Response**
```json
{ "status": "ok" }
```

---

## Attractions

### `GET /api/attractions`

List attractions.

**Query params**
- `category` (optional)
- `region` (optional)

### `GET /api/attractions/{slug}`

Retrieve one attraction by slug.

---

## Hotels

### `GET /api/hotels`

List hotels.

**Query params**
- `city` (optional)
- `stars` (optional, integer)
- `min_price` (optional, integer)
- `max_price` (optional, integer)

### `GET /api/hotels/{slug}`

Retrieve one hotel by slug.

---

## Restaurants

### `GET /api/restaurants`

List restaurants.

**Query params**
- `city` (optional)
- `cuisine` (optional)

### `GET /api/restaurants/{slug}`

Retrieve one restaurant by slug.

---

## AI recommendations (SSE)

### `POST /api/ai/recommend`

Streams AI-generated travel guidance.

**Request body**
```json
{ "message": "Plan a 3-day trip in Benin" }
```

**Response type**
`text/event-stream`

SSE chunks are formatted as:

```text
data: chunk text

```

Final sentinel:

```text
data: [DONE]

```

### Frontend integration notes

- Consume with `ReadableStream` and parse line-by-line.
- Append each `data:` chunk to progressively update UI.
- Stop reading when `[DONE]` is received.
