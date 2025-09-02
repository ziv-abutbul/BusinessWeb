from django.contrib import admin
from .models import ContactInfo, FeatureGrid, HeroSection, SiteLogo, SiteSettings, GalleryImage , ContentSection, SplitSection, TeamMember

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


@admin.register(SplitSection)
class SplitSectionAdmin(admin.ModelAdmin):
    list_display = ("headline", "background_color","text_color", "background_image_preview", "image_preview","text_color_title")
    search_fields = ("headline", "description")

    def background_image_preview(self, obj):
        if obj.background_image:
            return f'<img src="{obj.background_image.url}" width="100" style="border-radius:6px;" />'
        return "—"
    background_image_preview.allow_tags = True
    background_image_preview.short_description = "Background"

    def image_preview(self, obj):
        if obj.image:
            return f'<img src="{obj.image.url}" width="100" style="border-radius:6px;" />'
        return "—"
    image_preview.allow_tags = True
    image_preview.short_description = "Image"

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'linkedin', 'github', 'twitter')
    search_fields = ('name', 'role')