from . import views
from django.urls import path
from .views import ContactInfoViewSet, SiteLogoView, SiteSettingsView, GalleryListView 

urlpatterns = [
    path('hero/', SiteSettingsView.as_view(), name='hero'),
    path('gallery/', GalleryListView.as_view(), name='gallery'),
    path('contact/', ContactInfoViewSet.as_view(), name='contact'),
    path("logo/", SiteLogoView.as_view(), name="site_logo"),

]
