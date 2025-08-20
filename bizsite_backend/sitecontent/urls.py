from django.urls import path
from .views import SiteSettingsView, GalleryListView

urlpatterns = [
    path('hero/', SiteSettingsView.as_view(), name='hero'),
    path('gallery/', GalleryListView.as_view(), name='gallery'),
]
