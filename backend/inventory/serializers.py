from rest_framework import serializers
from .models import Equipment, Equipment_issued
from accounts.models import Society


class SocietySerializer(serializers.ModelSerializer):
    class Meta:
        model = Society
        fields = ['user', 'society_id', 'society_name']


class EquipmentSerializer(serializers.ModelSerializer):
    society = SocietySerializer(many=False)

    class Meta:
        model = Equipment
        fields = ['id', 'name', 'description', 'quantity', 'society', 'numavail']


class Equipment_issuedSerializer(serializers.ModelSerializer):
    equipment = EquipmentSerializer(many=False)

    class Meta:
        model = Equipment_issued
        fields = ['id', 'equipment', 'issuedate', 'returndate', 'borrower', 'isapproved']
