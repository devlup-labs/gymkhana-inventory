from django.urls import path
from . import views

urlpatterns = [
    path("getequipment", views.get_equipment_by_society),
    path("addequipment", views.add_equipment),
    path("updateequipment/<int:id>", views.update_equipment),
    path("deleteequipment/<int:id>", views.delete_equipment),
    path("getallsocieties", views.get_all_society),
    path("pendingreturns", views.get_pending_returns),
    path("searchequipment/", views.SearchEquipment.as_view()),
    path('make-request', views.make_request),
    path("delete-request", views.delete_request),
    path("approve-request", views.approve_request),
    path('decline-request', views.decline_request),
    path('return-equipment', views.return_equipment),
    path('show-pending-requests/', views.show_pending_requests),
    path("show-currently-issued/", views.show_currently_issued),
    path("request-extension", views.request_extension),
    path('accept-extension', views.accept_extension),
    path("reject-extension", views.reject_extension),
]
