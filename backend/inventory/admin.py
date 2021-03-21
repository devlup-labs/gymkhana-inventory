from django.contrib import admin
from .models import Equipment, Equipment_issued

# Register your models here.
admin.site.register(Equipment)
admin.site.register(Equipment_issued)
