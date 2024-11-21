from flask_sqlalchemy import SQLAlchemy
from app.app import app


db = SQLAlchemy(app)

app.app_context().push()
