from rest_framework import serializers
from adIndex.models import EbayUser, Ad
from django.contrib.auth.models import User
from adIndex.models import Ad


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'id')

class EbayUserSerializer(serializers.Serializer):
    class Meta:
        model = EbayUser
        fields = ('AdDistroId', 'EbayUsername', 'EbayPassword')

class AdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ad
        fields = ('title', 'description', 'price', 'packageWeight', 'packageHeight', 'packageWidth', 'packageUnitMeasurement', 'packageLength', 'is_active', 'postTo')