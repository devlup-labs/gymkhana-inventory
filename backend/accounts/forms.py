from django import forms
from .models import Borrower


class UserProfileEditForm(forms.ModelForm):
    class Meta:
        model = Borrower
        fields = ('phone_number',)
