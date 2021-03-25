from django.db import models
from accounts.models import Society, Borrower


# Create your models here.


class Equipment(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=300, blank=True)
    quantity = models.IntegerField(default=1)
    # societyname = models.ForeignKey(Society, on_delete=models.CASCADE)
    society = models.ForeignKey(Society, on_delete=models.CASCADE, default=1)
    numavail = models.IntegerField(default=1)

    def __str__(self):
        return self.name


class Equipment_issued(models.Model):
    name = models.CharField(max_length=200)
    # societyname=models.ForeignKey(Society,on_delete=models.CASCADE)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, null=True)
    society = models.ForeignKey(Society, on_delete=models.CASCADE, null=True)
    issuedate = models.DateTimeField(auto_now_add=True, null=True)
    returndate = models.DateTimeField(null=True)
    borrower = models.ForeignKey(Borrower, on_delete=models.CASCADE, null=True)
    isapproved = models.BooleanField(default=False)
    code = models.CharField(max_length=10, default='')

    def __str__(self):
        return self.equipment.name
