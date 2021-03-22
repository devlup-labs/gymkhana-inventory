from django.contrib import admin

from .models import Borrower, Society
# Register your models here.

admin.site.register(Borrower)
admin.site.register(Society)
