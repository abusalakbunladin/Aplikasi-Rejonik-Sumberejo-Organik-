from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import User
from app.security import verify_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = verify_token(token)
    if payload is None:
        raise HTTPException(status_code=401, detail="Token tidak valid atau kadaluarsa")
 
    username = payload.get("sub")
    if not username:
        raise HTTPException(status_code=401, detail="Token tidak valid atau kadaluarsa")
 
    with SessionLocal() as db:
        masih_ada = db.query(User.id).filter(User.username == username).first()
    if masih_ada is None:
        raise HTTPException(status_code=401, detail="Token tidak valid atau kadaluarsa")
 
    return username