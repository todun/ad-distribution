from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic
from .models import Ad
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
# Create your views here.

class IndexView(generic.ListView):
    template_name = "adIndex/index.html"
    context_object_name = "ad_all"

    def get_queryset(self):
        return Ad.objects.all()