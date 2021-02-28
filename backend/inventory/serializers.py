from rest_framework import serializers
from .models import Society, Equipment, Equipment_issued

class SocietySerializer(serializers.ModelSerializer):
    class Meta:
        model = Society
        fields = ['id', 'name', 'mailid']


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ['id', 'name', 'description', 'quantity', 'societyname', 'numavail']

class Equipment_issued(serializers.ModelSerializer):
    class Meta:
        model = Equipment_issued
        fields = ['id', 'name', 'societyname', 'issuedate', 'returndate', 'borrower', 'isapproved']
