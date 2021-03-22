# from django.shortcuts import render
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Borrower, Society
from django.contrib.auth.models import User
from .forms import UserProfileEditForm, AssignRoleForm
from rest_framework import status


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter


class EditUserProfile(APIView):

    def post(self, request, *args, **kwargs):

        mail = request.data["mail"]
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


class AssignRole(APIView):
    # permission_classes = (Borrower,)

    def post(self, request, *args, **kwargs):

        current_mail = request.data["current_mail"]
        assign_mail = request.data["assign_mail"]
        society_id = request.data['society_id']
        role = request.data['role']

        if Society.objects.filter(mail=current_mail).exists() and Society.objects.get(
                mail=current_mail).society_id == society_id:

            if (role == 'borrower' and society_id == -1) or (role == 'club-member' and society_id != -1):
                if Borrower.objects.filter(mail=assign_mail).exists():
                    b = Borrower.objects.get(mail=assign_mail)
                    form = AssignRoleForm(data={"society_id": society_id, "role": role}, instance=b)
                    if form.is_valid():
                        form.save()
                        return Response({"message": "done"}, status=status.HTTP_200_OK)
                    else:
                        return Response({"message": "error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                return Response({"message": "requested user doesn't exists"}, status=status.HTTP_404_NOT_FOUND)
            return Response({"message": "Invalid credentials"})

        return Response({"message": "You are not authenticated to changes roles"}, status=status.HTTP_200_OK)
