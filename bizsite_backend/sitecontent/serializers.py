from rest_framework import serializers
from .models import SiteLogo, SiteSettings, GalleryImage , ContactInfo

class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = '__all__'

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'
class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = "__all__"

class SiteLogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteLogo
        fields = ["image", "alt_text"]