from django.http import JsonResponse
from rest_framework import generics,viewsets
from .models import ContactInfo, ContentSection, SiteLogo, SiteSettings, GalleryImage
from .serializers import ContactInfoSerializer, ContentSectionSerializer, SiteLogoSerializer, SiteSettingsSerializer, GalleryImageSerializer

class SiteSettingsView(generics.RetrieveAPIView):
    queryset = SiteSettings.objects.all()
    serializer_class = SiteSettingsSerializer

    def get_object(self):
        return SiteSettings.objects.first()

class GalleryListView(generics.ListAPIView):
    queryset = GalleryImage.objects.filter(is_active=True)
    serializer_class = GalleryImageSerializer


class ContactInfoViewSet(generics.ListAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer

class SiteLogoView(generics.RetrieveAPIView):
    queryset = SiteLogo.objects.all()
    serializer_class = SiteLogoSerializer

    def get_object(self):
        return SiteLogo.objects.first()


class ContentSectionListView(generics.ListAPIView):
    queryset = ContentSection.objects.all()
    serializer_class = ContentSectionSerializer