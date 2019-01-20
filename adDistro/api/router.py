from api.viewSet import AdViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Ad', AdViewSet)
