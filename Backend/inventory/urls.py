from django.urls import include, path
from . import views

urlpatterns = [
  path('addequipment', views.add_equipment),
  path('updateequipment/<int:id>',views.update_equipment),
  path('deleteequipment/<int:id>',views.delete_equipment),
  path('getequipment',views.get_equipment_by_society)
]