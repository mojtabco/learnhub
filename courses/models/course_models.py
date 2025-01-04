
from django.core.validators import FileExtensionValidator
from learnhub import settings
from . import SubCategory
from .base import *
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
import re

# Create your models here.

class Course(models.Model):
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, related_name='fkey_course')
    title = models.CharField(max_length=200,null=False, blank=False)
    description = models.TextField(max_length=500,null=False, blank=True)
    thumbnail = models.ImageField(upload_to=user_directory_path, null=True, blank=True,
                                  validators = [FileExtensionValidator(allowed_extensions=['jpg', 'gif', 'png'])])
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    is_published = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    certified = models.BooleanField(default=False)
    slug = models.SlugField(unique=True)
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)
    lesson_count = models.PositiveIntegerField(default=0)
    likes = models.ManyToManyField(User, related_name='course_likes', blank=True)
    tag = models.ManyToManyField(User, related_name='course_tag', blank=True)


    def __str__(self):
        return f"{self.slug} - {self.updated}"

    def total_likes(self):
        return self.likes.count()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = re.sub(r'\s+', '-', self.title).strip('-')

        # if  not self.thumbnail:
        #     self.thumbnail = settings.COURSE_DEFAULT_COVER

        if  not self.description:
            self.description = settings.COURSE_DESCRIPTION

        super().save(*args, **kwargs)
        access_group, created = SiteAccessGroup.objects.get_or_create(permission=settings.COURSE_EVERYONE)
        course_access, created = CourseAccess.objects.get_or_create(course=self)
        course_access.access_groups.add(access_group)
        course_access.access_users.add(self.owner)

    def delete(self, *args, **kwargs):
        if self.thumbnail:
            self.thumbnail.delete(save=False)

        super().delete(*args, **kwargs)

class CourseSeason(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='fkey_course_season')
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0)
    lesson_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.course.title}: {self.title}"

    class Meta:
        ordering = ['order']

    def save(self, *args, **kwargs):
       super().save(*args, **kwargs)

class SiteAccessGroup(models.Model):
    permission = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.permission

class CourseAccess(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='fkey_access_entries')
    access_users = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='fkey_accessible_users')
    access_groups = models.ManyToManyField(SiteAccessGroup, blank=True, related_name='fkey_accessible_courses')

    def __str__(self):
        return f"Access for Course: {self.course.title}"

class Quote(models.Model):
    category = models.CharField(max_length=25, null=False, blank=False)
    quote = models.CharField(max_length=500,null=False, blank=False)
    quote_speaker = models.CharField(max_length=50, null=False, blank=False)
    likes = models.ManyToManyField(User, related_name='quote_likes', blank=True)

    def total_likes(self):
        return self.likes.count()


# ------------------------------------------------------------------------------- Signal
@receiver(pre_save, sender=Course)
def delete_old_files(sender, instance, **kwargs):
    if instance.pk:
        old_instance = sender.objects.get(pk=instance.pk)
        if old_instance.thumbnail and old_instance.thumbnail != instance.thumbnail:
            old_instance.thumbnail.delete(save=False)

@receiver(post_save, sender=Course)
def create_default_section(sender, instance, created, **kwargs):
    if created:
        CourseSeason.objects.create(
            course=instance,
            title="فصل اول",
            description="فصل اول به صورت پیش فرض ایجاد شده است",
            order=1
        )



