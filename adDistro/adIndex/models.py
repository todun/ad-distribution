from django.db import models

# Create your models here.
class Ad(models.Model):
    title = models.CharField(max_length = 250, default = "")
    description = models.CharField(max_length = 1000, default = "")
    price = models.FloatField(default = 0.00)
    packageWeight = models.FloatField(default = 0.00)
    packageHeight = models.FloatField(default = 0.00)
    packageWidth = models.FloatField(default = 0.00)
    packageUnitMeasurement = models.CharField(max_length = 250, default = "")
    packageLength = models.FloatField(default = 0.00)
    is_active = models.BooleanField(default = True)
    postTo = models.CharField(max_length = 250, default = "")
    objects = models.Manager()

    def __str__(self):
        return self.title

class User(models.Model):
    userID = models.IntegerField()
    username = models.CharField