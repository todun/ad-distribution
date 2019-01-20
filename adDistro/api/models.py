from django.db import models

# Create your models here.

class AdDistroUser(models.Model):
    AdDistroId = models.IntegerField
    AdDistroUsername = models.CharField(max_length = 30)
    AdDistroPassword = models.CharField(max_length = 30)

class EbayUser(models.Model):
    AdDistroId = models.IntegerField
    EbayUsername = models.CharField(max_length = 30)
    EbayPassword = models.CharField(max_length = 30)