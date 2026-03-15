from typing import Any
from sqlmodel import SQLModel, Field
from sqlalchemy import JSON, Column
from datetime import datetime, timezone


# ---------------------------------------------------------------------------
# Attraction
# ---------------------------------------------------------------------------
class Attraction(SQLModel, table=True):
    # slug is the natural key — it's already unique, already used in URLs
    # session.get(Attraction, "pendjari") is all we need for detail lookups
    slug: str = Field(primary_key=True)
    name: str
    region: str
    badge: str
    category: str
    description: str
    long_description: str
    rating: float
    reviews: int
    best_time: str
    travel_time: str
    image: str

    # SQLModel serialises List/Dict fields to JSON TEXT in SQLite
    gallery: list[str] = Field(default=[], sa_column=Column(JSON))
    tips: list[str] = Field(default=[], sa_column=Column(JSON))
    nearby_hotels: list[dict[str, str]] = Field(default=[], sa_column=Column(JSON))
    nearby_restaurants: list[dict[str, str]] = Field(default=[], sa_column=Column(JSON))
    weather: list[dict[str, str]] = Field(default=[], sa_column=Column(JSON))

    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------------------------------------------------------------------------
# Hotel
# ---------------------------------------------------------------------------
class Hotel(SQLModel, table=True):
    slug: str = Field(primary_key=True)
    name: str
    city: str
    address: str
    price: int  # per night in EUR
    rating: float
    stars: int
    reviews: int
    description: str
    image: str

    gallery: list[str] = Field(default=[], sa_column=Column(JSON))
    amenities: list[str] = Field(default=[], sa_column=Column(JSON))
    nearby_attractions: list[dict[str, str]] = Field(default=[], sa_column=Column(JSON))
    contact: dict[str, str] = Field(default={}, sa_column=Column(JSON))
    policies: dict[str, str] = Field(default={}, sa_column=Column(JSON))

    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------------------------------------------------------------------------
# Restaurant
# ---------------------------------------------------------------------------
class Restaurant(SQLModel, table=True):
    slug: str = Field(primary_key=True)
    name: str
    city: str
    address: str
    cuisine: str
    description: str
    price: str   # "$", "$$", "$$$"
    rating: float
    reviews: int
    hours: str
    specialty: str
    image: str

    gallery: list[str] = Field(default=[], sa_column=Column(JSON))
    menu: list[dict[str, Any]] = Field(default=[], sa_column=Column(JSON))
    contact: dict[str, str] = Field(default={}, sa_column=Column(JSON))
    features: list[str] = Field(default=[], sa_column=Column(JSON))

    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))