from django.urls import path
from .views import ContactInfoViewSet, SiteSettingsView, GalleryListView

urlpatterns = [
    path('hero/', SiteSettingsView.as_view(), name='hero'),
    path('gallery/', GalleryListView.as_view(), name='gallery'),
    path('contact/', ContactInfoViewSet.as_view(), name='contact'),
]
