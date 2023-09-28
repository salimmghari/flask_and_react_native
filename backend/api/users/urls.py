from api.users.views import (
    SignupView,
    LoginView,
    LogoutView
)


def user_rest(api):
    api.add_resource(SignupView, '/api/users/signup/')
    api.add_resource(LoginView, '/api/users/login/')
    api.add_resource(LogoutView, '/api/users/logout/')
