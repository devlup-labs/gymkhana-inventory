from django.contrib import admin

from .models import Borrower, SocietyAdmin
# Register your models here.

admin.site.register(Borrower)
admin.site.register(SocietyAdmin)
