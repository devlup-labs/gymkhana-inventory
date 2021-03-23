from .serializers import (
    EquipmentSerializer,
    SocietySerializer,
    Equipment_issuedSerializer,
)

# from django.shortcuts import render
import json
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

# Create your views here.
from .models import Equipment, Equipment_issued
from accounts.models import Society, Borrower
from rest_framework.views import APIView


# from datetime import datetime
# Create your views here.


@api_view(["GET"])
@csrf_exempt
def get_equipment_by_society(request):
    payload = json.loads(request.body)
    society = Society.objects.get(society_name=payload["society"])
    equip = Equipment.objects.filter(societyname=society)
    serializer = EquipmentSerializer(equip, many=True)
    return JsonResponse(
        {"equipments": serializer.data}, safe=False, status=status.HTTP_200_OK
    )


@api_view(["POST"])
@csrf_exempt
def add_equipment(request):
    payload = json.loads(request.body)
    try:
        society = Society.objects.get(society_name=payload["society"])
        equipment = Equipment.objects.create(
            name=payload["name"],
            description=payload["description"],
            quantity=payload["quantity"],
            societyname=society,
            numavail=payload["numavail"],
        )
        serializer = EquipmentSerializer(equipment)
        return JsonResponse(
            {"equipment": serializer.data}, safe=False, status=status.HTTP_201_CREATED
        )
    except ObjectDoesNotExist as e:
        return JsonResponse(
            {"error": str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND
        )
    except Exception:
        return JsonResponse(
            {"error": "Something terrible went wrong"},
            safe=False,
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


@api_view(["PUT"])
@csrf_exempt
def update_equipment(request, id):
    payload = json.loads(request.body)
    try:
        equip = Equipment.objects.filter(id=id)
        equip.update(**payload)
        equip1 = Equipment.objects.get(id=id)
        serializer = EquipmentSerializer(equip1)
        return JsonResponse(
            {"equipment": serializer.data}, safe=False, status=status.HTTP_200_OK
        )
    except ObjectDoesNotExist as e:
        return JsonResponse(
            {"error": str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND
        )
    except Exception:
        return JsonResponse(
            {"error": "Something terrible went wrong"},
            safe=False,
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


@api_view(["DELETE"])
@csrf_exempt
def delete_equipment(request, id):
    try:
        equip = Equipment.objects.get(id=id)
        equip.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except ObjectDoesNotExist as e:
        return JsonResponse(
            {"error": str(e)}, safe=False, status=status.HTTP_404_NOT_FOUND
        )
    except Exception:
        return JsonResponse(
            {"error": "Something went wrong"},
            safe=False,
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )


@api_view(["GET"])
@csrf_exempt
def get_all_society(request):
    # payload = json.loads(request.body)
    all_society = Society.objects.all()
    # equip = Equipment.objects.filter(societyname=society)
    serializer = SocietySerializer(all_society, many=True)
    return JsonResponse(
        {"societies": serializer.data}, safe=False, status=status.HTTP_200_OK
    )


@api_view(["GET"])
@csrf_exempt
def get_pending_returns(request):
    payload = json.loads(request.body)
    borrowern = Borrower.objects.get(user=payload["borrower"])
    equip = Equipment_issued.objects.filter(borrower=borrowern, isapproved=True)
    serializer = Equipment_issuedSerializer(equip, many=True)
    return JsonResponse(
        {"Equipments To Be Returned": serializer.data},
        safe=False,
        status=status.HTTP_200_OK,
    )


class SearchEquipment(APIView):
    def get(self, request, *args, **kwargs):

        search = request.GET["searchText"]

        allObjects = Equipment.objects.all()

        returnData = {}

        for Object in allObjects:
            name = Object.name
            if search in name and search in name[: len(search) + 1]:
                returnData[name] = EquipmentSerializer(Object, many=False).data

        return Response({"message": returnData})


@api_view(["POST"])
@csrf_exempt
def approve_request(request):
    mail = request.data["mail"]

    code = request.data["code"]

    if Equipment_issued.objects.filter(code=code).exists():

        equipment_issued = Equipment_issued.objects.get(code=code)
        id = equipment_issued.society.society_id

        if (
            Society.objects.filter(mail=mail).exists()
            and Society.objects.get(mail=mail).society_id == id
        ) or (
            Borrower.objects.filter(mail=mail).exists()
            and Borrower.objects.get(mail=mail).society_id == id
        ):

            equipment = equipment_issued.equipment
            borrower = equipment_issued.borrower
            society_admin = Society.objects.get(society_id=id)

            society_admin.approved_requests["items"][code] = EquipmentSerializer(
                equipment
            ).data
            del society_admin.pending_requests["items"][code]
            society_admin.save()

            borrower.approved_requests["items"][code] = EquipmentSerializer(
                equipment
            ).data
            del borrower.pending_requests["items"][code]
            borrower.save()

            equipment_issued.isapproved = True
            equipment_issued.save(update_fields=["isapproved"])
            return Response({"message": "successfully approved the request"})

        else:
            return Response({"message": "You are not authorized to handle the request"})
    else:
        return Response(
            {"message": "Equipment not found"}, status=status.HTTP_404_NOT_FOUND
        )


@api_view(["POST"])
@csrf_exempt
def delete_request(request):
    mail = request.data["mail"]

    code = request.data["code"]

    if Equipment_issued.objects.filter(code=code).exists():

        equipment_issued = Equipment_issued.objects.get(code=code)
        id = equipment_issued.society.society_id
        borrower = equipment_issued.borrower

        if Borrower.objects.filter(mail=mail).exists() and mail == borrower.mail:

            equipment = equipment_issued.equipment
            society_admin = Society.objects.get(society_id=id)

            if equipment_issued.isapproved == False:
                equipment.numavail += 1
                equipment.save(update_fields=["numavail"])

                del society_admin.pending_requests["items"][code]
                society_admin.save()

                del borrower.pending_requests["items"][code]
                borrower.save()

                equipment_issued.delete()
                return Response(
                    {"message": "successfully deleted request for equipment"}
                )

            else:
                return Response(
                    {
                        "message": "Your request is already approved by Admin, so can't be deleted"
                    }
                )

        else:
            return Response({"message": "You are not authorized to handle the request"})
    else:
        return Response(
            {"message": "Equipment not found"}, status=status.HTTP_404_NOT_FOUND
        )
