import os
from dotenv import load_dotenv
from app.database import SessionLocal
from app.models import User
from app.security import get_password_hash

load_dotenv()

ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

if not ADMIN_USERNAME or not ADMIN_PASSWORD:
    print("ADMIN_USERNAME dan ADMIN_PASSWORD belum diisi di file .env. Isi dulu sebelum menjalankan script ini.")
else:
    db = SessionLocal()
    existing = db.query(User).filter(User.username == ADMIN_USERNAME).first()

    if existing:
        print(f"User '{ADMIN_USERNAME}' sudah ada, tidak dibuat ulang.")
    else:
        admin = User(username=ADMIN_USERNAME, hashed_password=get_password_hash(ADMIN_PASSWORD))
        db.add(admin)
        db.commit()
        print(f"User admin '{ADMIN_USERNAME}' berhasil dibuat.")

    db.close()