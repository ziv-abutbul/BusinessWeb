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
    
class SiteLogo(models.Model):
    image = models.ImageField(upload_to='logos/')
    alt_text = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.alt_text or "Site Logo"
    
class ContentSection(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    background_image = models.ImageField(upload_to='sections/backgrounds/')
    floating_image = models.ImageField(upload_to='sections/floating/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
    
class FeatureGrid(models.Model):
    ICON_TYPE_CHOICES = [
        ('class', 'CSS Class'),
        ('url', 'Image URL'),
    ]

    icon = models.CharField(max_length=255, help_text="CSS class (למשל: 'fa fa-star') או קישור לתמונה")
    icon_type = models.CharField(max_length=10, choices=ICON_TYPE_CHOICES, default='class')
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField(blank=True, null=True)  # 🔹 אופציונלי


    order = models.PositiveIntegerField(default=0, help_text="סדר הופעה ברשימה")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
    
class HeroSection(models.Model):
    headline = models.CharField(max_length=255)
    subheadline = models.TextField(blank=True, null=True)
    background_image = models.ImageField(upload_to='hero/')
    background_video = models.FileField(upload_to='hero/videos/', blank=True, null=True)
    cta_text = models.CharField(max_length=100, blank=True, null=True)
    cta_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.headline