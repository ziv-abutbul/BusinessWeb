from django.contrib import admin
from .models import ContactInfo, FeatureGrid, HeroSection, SiteLogo, SiteSettings, GalleryImage , ContentSection

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

@admin.register(ContentSection)
class ContentSectionAdmin(admin.ModelAdmin):
    list_display = ('title','description','background_image','floating_image','order')

@admin.register(FeatureGrid)
class FeatureGridAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'icon_type', 'order')
    list_editable = ('order',)
    ordering = ('order',)

@admin.register(HeroSection)
class HeroSectionAdmin(admin.ModelAdmin):
    list_display = ('headline', 'cta_text')