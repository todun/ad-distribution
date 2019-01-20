from adIndex.models import Ad
from api.serializers import AdSerializer
from rest_framework import viewsets

class AdViewSet(viewsets.ModelViewSet):
    queryset = Ad.objects.all()
    serializer_class = AdSerializer