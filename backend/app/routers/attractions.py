from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import get_session
from app.models import Attraction

router = APIRouter(prefix="/api/attractions", tags=["attractions"])


@router.get("", response_model=list[Attraction])
def list_attractions(
    category: Optional[str] = None,
    region: Optional[str] = None,
    session: Session = Depends(get_session),
):
    query = select(Attraction)
    # Only add WHERE clause when the param is actually provided —
    # if we checked for None here, unfiltered requests would return nothing
    if category:
        query = query.where(Attraction.category == category)
    if region:
        query = query.where(Attraction.region == region)
    return session.exec(query).all()


@router.get("/{slug}", response_model=Attraction)
def get_attraction(slug: str, session: Session = Depends(get_session)):
    attraction = session.get(Attraction, slug)
    if not attraction:
        raise HTTPException(status_code=404, detail="Attraction not found")
    return attraction