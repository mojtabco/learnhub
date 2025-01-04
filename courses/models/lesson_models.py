from django.conf import settings
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator
from django.core.exceptions import ValidationError
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save, pre_delete
from . import CourseSeason, Course
from datetime import timedelta
from .base import *
import random,string
from django.core.exceptions import PermissionDenied

# Create your models here.

class Lesson(models.Model):
    course_season = models.ForeignKey(CourseSeason, on_delete=models.CASCADE, related_name='fkey_lessons')
    title = models.CharField(max_length=200, null=False, blank=True)
    description = models.TextField(max_length=500, null=True, blank=True)
    duration = models.DurationField(default=timedelta(0), null=True, blank=True)
    order = models.PositiveIntegerField(default=0)
    thumbnail = models.ImageField(upload_to=user_directory_path, null=True, blank=True,
                                  validators=[FileExtensionValidator(allowed_extensions=['jpg', 'gif', 'png'])])
    lesson_content = models.FileField(upload_to=user_directory_path, null=False, blank=False,
                                      validators=[
                                          FileExtensionValidator(allowed_extensions=['mp4', 'mpg', 'mp3'])])
    likes = models.ManyToManyField(User, related_name='lesson_likes', blank=True)
    completed = models.ManyToManyField(User, related_name='lesson_completed', blank=True)

    def total_likes(self):
        return self.likes.count()

    def __str__(self):
        return f"{self.course_season.course.title}: {self.title}"

    class Meta:
        ordering = ['order']

    def save(self, *args, **kwargs):
        # self.set_default_thumbnail()
        self.set_default_description()
        super().save(*args, **kwargs)

    def set_default_description(self):
        if not self.description:
            self.description = settings.LESSON_DESCRIPTION

    def delete(self, *args, **kwargs):
        if self.lesson_content:
            self.lesson_content.delete(save=False)
        if self.thumbnail:
            self.thumbnail.delete(save=False)
        super().delete(*args, **kwargs)

class StudentProgress(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='fkey_progress')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='fkey_student_progress')
    completed_lessons_count = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('student', 'course')

    def __str__(self):
        return f"{self.student.username} - {self.course.title} Progress"

    def count_completed_lessons(self):
        # تعداد درس‌های تکمیل‌شده برای این دانشجو و این دوره
        completed_lessons = Lesson.objects.filter(course_season__course=self.course, completed=self.student).count()
        self.completed_lessons_count = completed_lessons
        self.save()
        return completed_lessons

class CertificateManager(models.Manager):
    def issued(self):
        return self.filter(certificate_status='issued')

class Certificate(models.Model):
    STATUS_CHOICES = [('pending', 'Pending'),
                      ('issued', 'Issued'),]

    student = models.ForeignKey('auth.User',on_delete=models.CASCADE,related_name='fkey_certificate_student' )
    course = models.ForeignKey('Course',on_delete=models.CASCADE,related_name='fkey_certificate_course')
    date_of_issue = models.DateTimeField(auto_now_add=True)
    certificate_status = models.CharField(max_length=10,choices=STATUS_CHOICES,default='pending')
    certificate_file = models.FileField(upload_to='certificates/',null=True,blank=True)
    certificate_code = models.CharField(max_length=50,unique=True,editable=False,null=True,blank=True)
    objects = models.Manager()

    class Meta:
        unique_together = ('student', 'course')
        verbose_name = 'Certificate'
        verbose_name_plural = 'Certificates'

    def __str__(self):
        return f"Certificate for {self.student.username} - {self.course.title} ({self.get_certificate_status_display()})"

    def clean(self):
        # Ensure the student has completed the course
        if not StudentProgress.objects.filter(
            student=self.student,
            course=self.course,
            completed_lessons_count=self.course.lesson_count
        ).exists():
            raise ValidationError("The student has not completed the course.")

    @staticmethod
    def generate_certificate_template():
        static_path = os.path.join(settings.BASE_DIR, 'core', 'static', 'assets', 'certificate', 'Certificate.docx')
        if not os.path.exists(static_path):
            raise FileNotFoundError(static_path, "فایل خام گواهی یافت نشد.")
        return static_path

    def save(self, *args, **kwargs):
        if not self.pk:
            random_number = random.randint(1000, 9999)
            random_ascii = ''.join(random.choices(string.ascii_uppercase + string.digits, k=4))
            self.certificate_code = f"CERT-COURSE{self.course.id}-{self.student.id}-{random_ascii}-{random_number}"

        super().save(*args, **kwargs)

# ------------------------------------------------------------------------------- Signal
@receiver(pre_save, sender=Lesson)
def delete_old_files(sender, instance, **kwargs):
    if instance.pk:
        old_instance = sender.objects.get(pk=instance.pk)
        if old_instance.lesson_content and old_instance.lesson_content != instance.lesson_content:
            old_instance.lesson_content.delete(save=False)
        if old_instance.thumbnail and old_instance.thumbnail != instance.thumbnail:
            old_instance.thumbnail.delete(save=False)

@receiver(pre_save, sender=Lesson)
def check_content_update(sender, instance, **kwargs):
    if instance.pk:
        old_instance = sender.objects.get(pk=instance.pk)
        instance._content_updated = old_instance.lesson_content != instance.lesson_content
    else:
        instance._content_updated = True

@receiver(post_save, sender=Lesson)
def update_lesson_metadata(sender, instance, created, **kwargs):
    if instance._content_updated or created:
        file_path = instance.lesson_content.path
        video_info = get_media_info(file_path)

        if 'duration' in video_info:
            instance.duration = timedelta(seconds=video_info['duration'])
            instance.save(update_fields=['duration'])

    # اجرای کد شمارش و به‌روزرسانی فقط در صورت ایجاد درس جدید
    if created:
        CourseSeason.objects.filter(id=instance.course_season.id).update(
            lesson_count=models.F('lesson_count') + 1
        )
        Course.objects.filter(id=instance.course_season.course.id).update(
            lesson_count=models.F('lesson_count') + 1
        )
        instance.course_season.course.save(update_fields=['updated'])

@receiver(pre_delete, sender=Lesson)
def decrease_count(sender, instance, **kwargs):
    CourseSeason.objects.filter(id=instance.course_season.id).update(
        lesson_count=models.F('lesson_count') - 1
    )
    Course.objects.filter(id=instance.course_season.course.id).update(
        lesson_count=models.F('lesson_count') - 1
    )



