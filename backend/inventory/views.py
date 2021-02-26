from .serializers import EquipmentSerializer
from django.shortcuts import render
import json
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
# Create your views here.
from .models import Society, Equipment
# Create your views here.
@api_view(["GET"])
@csrf_exempt
def get_equipment_by_society(request):
    payload = json.loads(request.body)
    society=Society.objects.get(name=payload["society"])
    equip = Equipment.objects.filter(societyname=society)
    serializer = EquipmentSerializer(equip, many=True)
    return JsonResponse({'equipments': serializer.data}, safe=False, status=status.HTTP_200_OK)
