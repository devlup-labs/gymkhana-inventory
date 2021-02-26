from django.urls import path
from .views import GoogleLogin

urlpatterns = [

    path('login/google/', GoogleLogin.as_view(), name='google_login'),
]
