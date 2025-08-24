from rest_framework import serializers
from .models import ContentSection, FeatureGrid, HeroSection, SiteLogo, SiteSettings, GalleryImage , ContactInfo, SplitSection

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

class ContentSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentSection
        fields = ['id', 'title', 'description', 'background_image', 'floating_image', 'order']

class FeatureGridSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeatureGrid
        fields = ['id', 'icon', 'icon_type', 'title', 'description','link','order']

class HeroSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSection
        fields = ['headline', 'subheadline', 'background_image', 'background_video', 'cta_text', 'cta_link']

class SplitSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SplitSection
        fields = '__all__'
