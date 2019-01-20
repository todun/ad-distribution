from rest_framework import serializers
from adIndex.models import Ad
class AdSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Ad
        fields = ('title', 'description', 'price', 'packageWeight', 'packageHeight', 'packageWidth', 'packageUnitMeasurement', 'packageLength', 'is_active', 'postTo')
        