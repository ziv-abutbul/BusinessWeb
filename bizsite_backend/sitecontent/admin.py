from django.contrib import admin
from .models import ContactInfo, SiteLogo, SiteSettings, GalleryImage

@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    list_display = ('headline', 'subheadline')

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'caption', 'order', 'is_active')
    list_editable = ('order', 'is_active')

@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ("phone", "email", "facebook", "whatsapp")

@admin.register(SiteLogo)
class SiteLogoAdmin(admin.ModelAdmin):
    list_display = ('alt_text', 'image')