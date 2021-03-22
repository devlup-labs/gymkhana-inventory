from django.urls import path
from .views import GoogleLogin, EditUserProfile, AssignRole

urlpatterns = [

    path('login/google/', GoogleLogin.as_view(), name='google_login'),
    path('editprofile/', EditUserProfile.as_view(), name="edit_profile"),
    path('assign-role/', AssignRole.as_view(), name="assign_role")
]
