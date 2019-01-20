from rest_framework import routers
from . import views

router = routers.DefaultRouter()
# router.register(r'user', views.UserViewset, 'list')
router.register(r'ebayuser', views.EbayUserViewset)
