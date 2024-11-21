from flask_jwt_extended import JWTManager
from app.app import app


jwt = JWTManager(app)

app.app_context().push()
