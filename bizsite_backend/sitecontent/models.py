from django.db import models

class SiteSettings(models.Model):
    hero_image = models.ImageField(upload_to='hero/', blank=True, null=True)
    headline = models.CharField(max_length=200, default="ברוכים הבאים לעסק שלנו")
    subheadline = models.TextField(blank=True, null=True)

    def __str__(self):
        return "Site Settings"

class GalleryImage(models.Model):
    image = models.ImageField(upload_to='gallery/')
    caption = models.CharField(max_length=200, blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Gallery Image {self.id} - {self.caption or ''}"
