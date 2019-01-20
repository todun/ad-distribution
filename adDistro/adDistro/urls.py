from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('adIndex/', include("adIndex.urls")),
    path('api/', include("api.urls")),
]
