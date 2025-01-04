from django.conf import settings
from django.db import models
from django.contrib.auth import user_logged_in, user_logged_out
from django.utils import timezone
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_delete
from courses.models.course_models import SiteAccessGroup
from learnhub import settings



def user_directory_path(instance, filename):
    return f'user_{instance.user.id}/profile-picture-{filename}'

# Create your models here.

class SiteAccessUser(models.Model):
    permission = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.permission

class ProfileUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.PROTECT)
    bio = models.TextField(null=True, blank=True)
    website = models.URLField(null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, null=True, blank=True)
    gender = models.CharField(default='Bisexual',max_length=10, choices=[
        ('Man', 'Man'),
        ('Women', 'Women'),
        ('Non-Binary', 'Non-Binary')
    ])
    is_published = models.BooleanField(default=True)

    access_groups = models.ManyToManyField(SiteAccessGroup, related_name='fkey_members', blank=True)
    access_users = models.ManyToManyField(SiteAccessUser, blank=True)


    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"

    def has_permission(self, permission):
        return self.access_users.filter(permission=permission).exists()

class UserLoginHistory(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)
    last_activity = models.DateTimeField(default=timezone.now)
    logout_time = models.DateTimeField(null=True, blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} - {self.login_time} - {self.logout_time} - {self.ip_address}"



# ------------------------------------------------------------------------------- Signal

@receiver(post_save, sender=User)
def create_default_section(sender, instance, created, **kwargs):
    if created:
        # ایجاد پروفایل جدید
        profile = ProfileUser.objects.create(
            user=instance,
            website=settings.SITE_WEBSITE,
            # profile_picture=settings.PROFILEUSER_DEFAULT_PICTURE
        )

        try:
            group = SiteAccessGroup.objects.get(permission=settings.COURSE_EVERYONE)
            profile.access_groups.add(group)

            access_permissions = [settings.USER_UPLOAD, settings.USER_DELETE,settings.USER_COURSE_ACCESS]
            access_users = SiteAccessUser.objects.filter(permission__in=access_permissions)
            profile.access_users.add(*access_users)


        except SiteAccessGroup.DoesNotExist:
            print("Group 'Everyone' does not exist.")
        except SiteAccessUser.DoesNotExist:
            print("User 'Upload' does not exist.")

@receiver(pre_delete, sender=User)
def delete_profile_user(sender, instance, **kwargs):
    profile = ProfileUser.objects.filter(user=instance).first()
    if profile:
        profile.delete()


@receiver(user_logged_in)
def update_user_login_time(sender, request, user, **kwargs):
    login_history, created = UserLoginHistory.objects.get_or_create(user=user)
    login_history.login_time = timezone.now()
    login_history.ip_address = request.META.get('HTTP_X_FORWARDED_FOR', request.META.get('REMOTE_ADDR'))
    login_history.save()

@receiver(user_logged_out)
def update_user_logout_time(sender, request, user, **kwargs):
    login_history = UserLoginHistory.objects.get(user=user)
    login_history.logout_time = timezone.now()
    login_history.save()





