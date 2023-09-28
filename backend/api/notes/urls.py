from api.notes.views import (
    NotesView,
    NoteView
)


def note_rest(api):
    api.add_resource(NotesView, '/api/notes/')
    api.add_resource(NoteView, '/api/notes/<int:pk>/')
