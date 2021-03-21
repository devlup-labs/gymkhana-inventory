from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

societyIds = {'shutterbugs': 1, 'robotics': 2, 'programming': 3, 'science': 4, 'frame-x': 5}


class Borrower(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50, default='')
    mail = models.CharField(max_length=20, default='none')
    role = models.CharField(max_length=15, default='borrower')
    phone_number = models.CharField(max_length=12)
    society_id = models.IntegerField(default=-1)

    # print("YES"*10)

    def __str__(self):
        return self.user.username


class SocietyAdmin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    society_id = models.IntegerField(default=-1)
    society_name = models.CharField(max_length=50, default='none')

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        mail_prefix = instance.email.split('@')

        if mail_prefix[0] not in list(societyIds.keys()):

            u = Borrower.objects.create(user=instance, mail=instance.email, name=instance.first_name)
            u.save()

        else:

            u = SocietyAdmin.objects.create(user=instance, society_name=instance.first_name,
                                            society_id=societyIds[mail_prefix[0]])
            u.save()
