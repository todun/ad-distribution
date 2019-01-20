from django.urls import include, path
# from .api import router
from rest_framework import routers
from . import views as djangoViews
from rest_framework.authtoken import views
from django.contrib.auth.views import LoginView

router = routers.DefaultRouter()
router.register('user', djangoViews.UserViewset, 'list')
router.register('ad', djangoViews.AdViewSet)

urlpatterns = [
    # path('ebayuser/', include(router.urls)),
    path('', include(router.urls)),
    ]
