# from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Borrower
from django.contrib.auth.models import User
from .forms import UserProfileEditForm
from rest_framework import status


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


class EditUserProfile(APIView):

    def post(self, request, *args, **kwargs):

        # dic = request.data['data']['profileObj']
        mail = request.data['data']['profileObj']['email']
        user = User.objects.filter(email=mail)

        if user.exists() and Borrower.objects.filter(user=user).exists():
            user = User.objects.get(email=mail)
            b = Borrower.objects.get(user=user)
            form = UserProfileEditForm(data=request.data['form'], instance=b)
            if form.is_valid():
                form.save()
                return Response({"message": "done"}, status=status.HTTP_200_OK)
            else:
                return Response({"message": "error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({"message": "user not found"}, status=status.HTTP_404_NOT_FOUND)
