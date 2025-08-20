from django.contrib import admin
from .models import SiteSettings, GalleryImage

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ('headline', 'subheadline')

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'caption', 'order', 'is_active')
    list_editable = ('order', 'is_active')
