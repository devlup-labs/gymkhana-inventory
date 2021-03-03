from django.db import models
from accounts.models import Borrower
from datetime import datetime

# Create your models here.


class Society(models.Model):
    name = models.CharField(max_length=200)
    mailid = models.EmailField(max_length=100)

    def __str__(self):
        return self.name


class Equipment(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=300, blank=True)
    quantity = models.IntegerField(default=1)
    societyname = models.ForeignKey(Society, on_delete=models.CASCADE)
    numavail = models.IntegerField(default=1)

    def __str__(self):
        return self.name


class Equipment_issued(models.Model):
    # name=models.CharField(max_length=200)
    # societyname=models.ForeignKey(Society,on_delete=models.CASCADE)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, null=True)
    issuedate = models.DateTimeField(default=datetime.now, blank=True)
    returndate = models.DateTimeField(default=datetime.now, blank=True)
    borrower = models.ForeignKey(Borrower, on_delete=models.CASCADE)
    isapproved = models.BooleanField(default=False)

    def __str__(self):
        return self.equipment.name
