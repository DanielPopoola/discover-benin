from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Attraction
from app.schemas import AttractionRead

router = APIRouter(prefix="/api/attractions", tags=["attractions"])


@router.get("", response_model=list[AttractionRead], response_model_by_alias=True)
def list_attractions(
    category: Optional[str] = None,
    region: Optional[str] = None,
    session: Session = Depends(get_session),
):
    query = select(Attraction)
    if category:
        query = query.where(Attraction.category == category)
    if region:
        query = query.where(Attraction.region == region)
    return session.exec(query).all()


@router.get("/{slug}", response_model=AttractionRead, response_model_by_alias=True)
def get_attraction(slug: str, session: Session = Depends(get_session)):
    attraction = session.exec(
        select(Attraction).where(Attraction.slug == slug)
    ).first()
    if not attraction:
        raise HTTPException(status_code=404, detail="Attraction not found")
    return attraction
