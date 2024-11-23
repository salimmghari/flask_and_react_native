import json
from flask import (
    request, 
    Response
)
from flask_restful import (
    Resource, 
    reqparse
)
from flask_jwt_extended import (
    create_access_token, 
    jwt_required,
    get_jwt
)
from werkzeug.security import (
    generate_password_hash, 
    check_password_hash
)
from app.jwt import jwt
from app.db import db
from api.users.models import User


BLACKLISTED_TOKENS = []

user_post_args = reqparse.RequestParser()
user_post_args.add_argument('username', type=str, required=True)
user_post_args.add_argument('password', type=str, required=True)


class SignupView(Resource):
    def post(self):
        args = user_post_args.parse_args()
        password = generate_password_hash(args.get('password'))
        user = User(
            username=args.get('username'),
            password=password
        )
        db.session.add(user)
        db.session.commit()
        db.session.refresh(user)
        return Response(
            response=json.dumps({
                'message': 'User created.',
                'token': create_access_token(identity=user.id)
            }),
            status=201,
            mimetype='application/json'
        )


class LoginView(Resource):
    def post(self):
        username = request.json.get('username')
        password = request.json.get('password')
        user = None
        if username is not None:
            user = User.query.filter_by(username=username).first()
        if user is None or not check_password_hash(user.password, password):
            return Response(
                response=json.dumps({
                    'message': 'Unauthorized.'
                }),
                status=401,
                mimetype='application/json'
            )
        return Response(
            response=json.dumps({
                'message': 'Logged in.',
                'token': create_access_token(identity=user.id)
            }),
            status=200,
            mimetype='application/json'
        )
            
class LogoutView(Resource):
    @jwt_required()
    def post(self):
        jti = get_jwt()['jti']
        BLACKLISTED_TOKENS.append(jti)
        return Response(
            response=json.dumps({
                'message': 'Logged out.'
            }),
            status=200,
            mimetype='application/json'
        )
    

@jwt.token_in_blocklist_loader
def check_if_token_in_blacklist(header, token):
    jti = token['jti']
    return jti in BLACKLISTED_TOKENS
