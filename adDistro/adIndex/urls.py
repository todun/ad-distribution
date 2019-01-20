from django.contrib import admin
from django.urls import path, include
from . import views as djangoViews
from rest_framework.authtoken import views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', djangoViews.IndexView.as_view(), name="index"),
    path('api-token-auth/', views.obtain_auth_token, name="obtain_auth_token"),
]

