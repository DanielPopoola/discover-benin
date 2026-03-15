"""
Read schemas — returned by the API, never written to the database.

Pure Pydantic BaseModel (not SQLModel) to avoid the table=True/table=False
inheritance conflict with JSON columns. FastAPI serialises using the alias
when response_model_by_alias=True is set on the route, which means the
frontend receives the camelCase names its TypeScript interfaces expect.

model_validate(orm_obj) works because Pydantic reads attributes by their
Python name (snake_case), then serialises them under the alias (camelCase).
"""
from datetime import datetime
from typing import Any
from pydantic import BaseModel, ConfigDict, Field


class AttractionRead(BaseModel):
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

    slug: str
    name: str
    region: str
    badge: str
    category: str
    description: str
    rating: float
    reviews: int
    image: str
    gallery: list[str] = []
    tips: list[str] = []
    weather: list[dict[str, str]] = []
    created_at: datetime

    # snake_case on the left matches the ORM attribute name.
    # alias on the right is what the JSON response key will be.
    long_description: str = Field(alias="longDescription")
    best_time: str = Field(alias="bestTime")
    travel_time: str = Field(alias="travelTime")
    nearby_hotels: list[dict[str, str]] = Field(default=[], alias="nearbyHotels")
    nearby_restaurants: list[dict[str, str]] = Field(default=[], alias="nearbyRestaurants")


class HotelRead(BaseModel):
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

    slug: str
    name: str
    city: str
    address: str
    price: int
    rating: float
    stars: int
    reviews: int
    description: str
    image: str
    gallery: list[str] = []
    amenities: list[str] = []
    contact: dict[str, str] = {}
    policies: dict[str, str] = {}
    created_at: datetime

    nearby_attractions: list[dict[str, str]] = Field(default=[], alias="nearbyAttractions")


class RestaurantRead(BaseModel):
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)

    slug: str
    name: str
    city: str
    address: str
    cuisine: str
    description: str
    price: str
    rating: float
    reviews: int
    hours: str
    specialty: str
    image: str
    gallery: list[str] = []
    menu: list[dict[str, Any]] = []
    contact: dict[str, str] = {}
    features: list[str] = []
    created_at: datetime