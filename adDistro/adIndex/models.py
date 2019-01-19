from django.db import models

# Create your models here.
class Ad(models.Model):
    title = models.CharField(max_length = 250)
    description = models.CharField(max_length = 1000)
    objects = models.Manager()
    
    def __str__(self):
        return self.title

    