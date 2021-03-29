from rest_framework import serializers
from .models import Borrower


class BorrowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Borrower
        fields = ["name", "mail", "phone_number"]
