from app.database import SessionLocal
from app.models import User
from app.security import get_password_hash

db = SessionLocal()

existing = db .query(User).filter(User.username == "admin").first()
if existing:
    print("User admin sudah ada, tidak bisa di buat ulang.")
else:
    admin = User(username="admin", hashed_password=get_password_hash("admin123"))
    db.add(admin)
    db.commit()
    print("User admin berhasil dibuat.")

db.close()