from rest_framework import serializers
from .models import Society,Equipment

class SocietySerializer(serializers.ModelSerializer):
    class Meta:
        model = Society
        fields = ['id', 'name', 'mailid']

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ['id', 'name', 'description','quantity','societyname','numavail']