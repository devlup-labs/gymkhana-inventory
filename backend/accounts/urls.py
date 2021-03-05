from django.urls import path
from .views import GoogleLogin, EditUserProfile

urlpatterns = [

    path('login/google/', GoogleLogin.as_view(), name='google_login'),
    path('editprofile/', EditUserProfile.as_view(), name="edit_profile"),
]
