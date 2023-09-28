import json
from flask import Response
from flask_restful import (
    Resource, 
    reqparse,
    fields,
    marshal_with
)
from flask_jwt_extended import (
    jwt_required,
    get_jwt_identity
)
from app.db import db
from api.notes.models import Note


note_fields = {
    'id': fields.Integer(),
    'title': fields.String(),
    'body': fields.String(),
    'created_at': fields.DateTime()
} 

note_post_args = reqparse.RequestParser()
note_post_args.add_argument('title', type=str, required=True)
note_post_args.add_argument('body', type=str, required=True)

note_put_args = reqparse.RequestParser()
note_put_args.add_argument('title', type=str, required=False)
note_put_args.add_argument('body', type=str, required=False)


class NotesView(Resource):
    @jwt_required()
    @marshal_with(note_fields)
    def get(self):
        user_id = get_jwt_identity()
        return Note.query.filter_by(user_id=user_id).all()

    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        args = note_post_args.parse_args()
        note = Note(
            title=args.get('title'),
            body=args.get('body'),
            user_id=user_id
        )
        db.session.add(note)
        db.session.commit()
        return Response(
            response=json.dumps({
                'message': 'Note created.'
            }),
            status=201,
            mimetype='application/json'
        )


class NoteView(Resource):
    @jwt_required()
    @marshal_with(note_fields)
    def get(self, pk):
        user_id = get_jwt_identity()
        return Note.query.filter_by(
            id=pk,
            user_id=user_id
        ).first()

    @jwt_required()
    def put(self, pk):
        user_id = get_jwt_identity()
        note = Note.query.filter_by(
            id=pk,
            user_id=user_id
        ).first()
        args = note_put_args.parse_args()
        if args.get('title') is not None:
            note.title = args.get('title')
        if args.get('body') is not None:
            note.body = args.get('body')
        db.session.commit()
        return Response(
            response=json.dumps({
                'message': 'Note updated.'
            }),
            status=200,
            mimetype='application/json'
        )
 
    @jwt_required()
    def delete(self, pk):
        user_id = get_jwt_identity()
        note = Note.query.filter_by(
            id=pk,
            user_id=user_id
        ).first()
        db.session.delete(note)
        db.session.commit()
        return Response(
            response=json.dumps({
                'message': 'Note deleted.'
            }),
            status=204,
            mimetype='application/json'
        )
    