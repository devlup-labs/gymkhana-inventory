from django.urls import path
from . import views

urlpatterns = [
  path('getequipment', views.get_equipment_by_society),
  path('addequipment', views.add_equipment),
  path('updateequipment/<int:id>', views.update_equipment),
  path('deleteequipment/<int:id>', views.delete_equipment),
  path('getallsocieties', views.get_all_society),
]
