from rest_framework import generics,viewsets
from .models import ContactInfo, SiteSettings, GalleryImage
from .serializers import ContactInfoSerializer, SiteSettingsSerializer, GalleryImageSerializer

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