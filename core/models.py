from django.db import models
from proglog.proglog import SETTINGS

from learnhub import settings

# Create your models here.
# models/core.py

class SiteSetting(models.Model):
    site_name = models.CharField(max_length=20, default="LearnHub")
    site_url = models.URLField(default=settings.SITE_WEBSITE)
    site_title = models.CharField(max_length=40, default="Sharing and visibility hub")
    site_creator = models.CharField(max_length=20, default="Mojtaba Askari")
    site_description = models.TextField(default="Sharing and visibility hub")
    site_icon = models.ImageField(upload_to='site/', null=True, blank=True)
    site_logo = models.ImageField(upload_to='site/', null=True, blank=True)

    deployment_time = models.DateTimeField(auto_now=True)
    version = models.CharField(max_length=10,default=settings.VERSION_SITE)

    contact_address = models.TextField(max_length=200, default="Tehran Iran")
    contact_phone = models.CharField(max_length=20, default="09128886225")
    contact_email = models.EmailField(default="mojtabco@gmail.com")
    contact_location = models.CharField(max_length=20, default="35.769649,51.425775")


    def __str__(self):
        return self.site_title

    def save(self, *args, **kwargs):

        if  not self.site_icon:
            self.site_icon = settings.SITE_DEFAULT_ICON

        if  not self.site_logo:
            self.site_logo = settings.SITE_DEFAULT_LOGO

        super().save(*args, **kwargs)

    @property
    def full_description(self):
        if len(self.site_description) > 150:
            return f"{self.site_description[:147]}..."
        return self.site_description


