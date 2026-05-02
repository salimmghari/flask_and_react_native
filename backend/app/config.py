import os
from datetime import timedelta


SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = bool(os.environ.get('DEBUG'))

SQLALCHEMY_DATABASE_URI = f'postgresql://postgres:{os.environ.get("DATABASE_PASSWORD")}@localhost:5432/notes'

SQLALCHEMY_TRACK_MODIFICATIONS = False

JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')

JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=10)

JWT_REFRESH_TOKEN_EXPIRES = timedelta(hours=1)

JWT_BLACKLIST_ENABLED = True

JWT_BLACKLIST_TOKEN_CHECKS = 'access'
