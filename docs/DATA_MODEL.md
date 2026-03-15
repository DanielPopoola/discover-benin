# Data Model and Seed Strategy

## Storage

The backend uses SQLModel on top of SQLAlchemy.

Default local DB:
- `sqlite:///./discover_benin.db`

## Entities

### Attraction

Key fields:
- `slug` (primary key)
- `name`, `region`, `category`, `description`
- `gallery`, `tips`, `nearby_hotels`, `nearby_restaurants`, `weather` (JSON)

### Hotel

Key fields:
- `slug` (primary key)
- `name`, `city`, `price`, `stars`, `rating`
- `gallery`, `amenities`, `nearby_attractions`, `contact`, `policies` (JSON)

### Restaurant

Key fields:
- `slug` (primary key)
- `name`, `city`, `cuisine`, `price`, `hours`, `specialty`
- `gallery`, `menu`, `contact`, `features` (JSON)

## Why slug primary keys?

- They map directly to user-friendly URLs.
- They avoid a separate ID↔slug lookup layer.
- They simplify detail endpoint implementation.

## Seeding behavior

At app startup:
1. Tables are created if missing.
2. Seed data is loaded into each domain table.

The seed workflow is intended to be idempotent so restarts do not create duplicates.

## Evolution guidance

When adding fields:
1. Update ORM model in `backend/app/models.py`.
2. Update response schema in `backend/app/schemas.py`.
3. Update seed dataset in `backend/app/seed.py`.
4. Update frontend data interfaces/pages as needed.
5. Add migration strategy if moving beyond startup `create_all`.
