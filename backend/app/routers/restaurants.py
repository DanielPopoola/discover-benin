from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Restaurant
from app.schemas import RestaurantRead

router = APIRouter(prefix="/api/restaurants", tags=["restaurants"])


@router.get("", response_model=list[RestaurantRead], response_model_by_alias=True)
def list_restaurants(
    city: Optional[str] = None,
    cuisine: Optional[str] = None,
    session: Session = Depends(get_session),
):
    query = select(Restaurant)
    if city:
        query = query.where(Restaurant.city == city)
    if cuisine:
        query = query.where(Restaurant.cuisine == cuisine)
    return session.exec(query).all()


@router.get("/{slug}", response_model=RestaurantRead, response_model_by_alias=True)
def get_restaurant(slug: str, session: Session = Depends(get_session)):
    restaurant = session.get(Restaurant, slug)
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return restaurant