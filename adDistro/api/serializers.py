from rest_framework import serializers
from . import models
from django.contrib.auth.models import User


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'id')

class EbayUserSerializer(serializers.Serializer):
    class Meta:
        model = models.EbayUser
        fields = ('AdDistroId', 'EbayUsername', 'EbayPassword')