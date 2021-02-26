from django.db import models

# Create your models here.

class Society(models.Model):
    name=models.CharField(max_length=200)
    mailid=models.EmailField(max_length=100)

    def __str__(self):
        return self.name

class Equipment(models.Model):
    name=models.CharField(max_length=200)
    description=models.CharField(max_length=300,blank=True)
    quantity=models.IntegerField(default=1)
    societyname=models.ForeignKey(Society,on_delete=models.CASCADE)
    numavail=models.IntegerField(default=1)

    def __str__(self):
        return self.name