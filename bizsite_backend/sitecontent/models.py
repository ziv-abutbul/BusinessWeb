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

class ContactInfo(models.Model):
    phone = models.CharField(max_length=20, verbose_name="מספר פלאפון")
    email = models.EmailField(verbose_name="אימייל")
    facebook = models.URLField(blank=True, null=True, verbose_name="קישור לפייסבוק")
    whatsapp = models.URLField(blank=True, null=True, verbose_name="קישור לוואטסאפ")

    class Meta:
        verbose_name = "פרטי יצירת קשר"
        verbose_name_plural = "פרטי יצירת קשר"

    def __str__(self):
        return f"{self.phone} | {self.email}"