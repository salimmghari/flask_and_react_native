from datetime import datetime
from app.db import db


class User(db.Model):
    id = db.Column(db.Integer(), unique=True, nullable=False, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    created_at = db.Column(db.DateTime(), nullable=False, default=datetime.now())


class Token(db.Model):
    id = db.Column(db.Integer(), unique=True, nullable=False, primary_key=True)
    blacklisted_token = db.Column(db.String(250), unique=True)
    created_at = db.Column(db.DateTime(), nullable=False, default=datetime.now())
