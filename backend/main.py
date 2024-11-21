import os
from flask_cors import CORS
from app.app import app
from app.db import db
from api.api import api
from api.notes.urls import note_rest
from api.users.urls import user_rest


if bool(os.environ.get('CORS')):
    CORS(app)

db.create_all()

note_rest(api)
user_rest(api)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5555)
