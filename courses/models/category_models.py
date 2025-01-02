from django.db import models

# Create your models here.

class Category(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title

class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='fkey_subcategory')
    title = models.CharField(max_length=50)
    icon = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.title

    @property
    def formatted_icon(self):
        return f"<i class='mdi mdi-{self.icon} mdi-18px me-1 align-text-bottom'></i>"