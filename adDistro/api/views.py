from rest_framework import viewsets
from . import serializers
from rest_framework.response import Response 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, logout
from . import serializers
from adIndex.models import Ad, EbayUser, AdDistroUser
from django.http import HttpResponse

class UserViewset(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.CurrentUserSerializer
    # model = User
    # print(queryset)
    # def get(self, request):
    #     try:
    #         username = request.data['username']
    #         password = request.data['password']
    #     except:
    #         return Response(status = 400)

    #     isValid = authenticate(username, password)

class EbayUserViewset(viewsets.ReadOnlyModelViewSet):
    queryset = EbayUser.objects.all()
    serializer_class = serializers.EbayUserSerializer

    # allowed_methods = ['POST', 'GET']
	# http_method_names = ['post', 'get']

    def get(self, request):
        pass
    
    def post(self, request):
        pass

class AdViewSet(viewsets.ModelViewSet):
    queryset = Ad.objects.all()
    serializer_class = serializers.AdSerializer
