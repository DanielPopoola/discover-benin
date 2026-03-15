from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Hotel
from app.schemas import HotelRead

router = APIRouter(prefix="/api/hotels", tags=["hotels"])


@router.get("", response_model=list[HotelRead], response_model_by_alias=True)
def list_hotels(
    city: Optional[str] = None,
    stars: Optional[int] = None,
    min_price: Optional[int] = None,
    max_price: Optional[int] = None,
    session: Session = Depends(get_session),
):
    query = select(Hotel)
    if city:
        query = query.where(Hotel.city == city)
    if stars:
        query = query.where(Hotel.stars == stars)
    if min_price is not None:
        query = query.where(Hotel.price >= min_price)
    if max_price is not None:
        query = query.where(Hotel.price <= max_price)
    return session.exec(query).all()


@router.get("/{slug}", response_model=HotelRead, response_model_by_alias=True)
def get_hotel(slug: str, session: Session = Depends(get_session)):
    hotel = session.get(Hotel, slug)
    if not hotel:
        raise HTTPException(status_code=404, detail="Hotel not found")
    return hotel