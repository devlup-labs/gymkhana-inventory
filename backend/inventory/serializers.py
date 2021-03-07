from rest_framework import serializers
from .models import Equipment, Equipment_issued
from accounts.models import SocietyAdmin


class SocietySerializer(serializers.ModelSerializer):
    class Meta:
        model = SocietyAdmin
        fields = ['user', 'society_id', 'society_name']


class EquipmentSerializer(serializers.ModelSerializer):
    societyname = SocietySerializer(many=False)

    class Meta:
        model = Equipment
        fields = ['id', 'name', 'description', 'quantity', 'societyname', 'numavail']


class Equipment_issuedSerializer(serializers.ModelSerializer):
    equipment = EquipmentSerializer(many=False)

    class Meta:
        model = Equipment_issued
        fields = ['equipment', 'issuedate', 'returndate', 'borrower', 'isapproved']
