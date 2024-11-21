from datetime import datetime
from app.db import db


class Note(db.Model):
    id = db.Column(db.Integer(), unique=True, nullable=False, primary_key=True)
    title = db.Column(db.String(100), unique=True, nullable=False)
    body = db.Column(db.Text(), nullable=False)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime(), nullable=False, default=datetime.now())
