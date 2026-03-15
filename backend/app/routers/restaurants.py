from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Restaurant

router = APIRouter(prefix="/api/restaurants", tags=["restaurants"])


@router.get("", response_model=list[Restaurant])
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


@router.get("/{slug}", response_model=Restaurant)
def get_restaurant(slug: str, session: Session = Depends(get_session)):
    restaurant = session.get(Restaurant, slug)
    if not restaurant:
        raise HTTPException(status_code=404, detail="Restaurant not found")
    return restaurant