from django.urls import include, path
# from .api import router
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('user', views.UserViewset, 'list')

urlpatterns = [
    # path('ebayuser/', include(router.urls)),
    path('', include(router.urls))
]
