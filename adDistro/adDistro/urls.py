from django.contrib import admin
from django.urls import include, path
from api.router import router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('adIndex/', include("adIndex.urls")),
    path('api/', include(router.urls))
]
