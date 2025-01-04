# Generated by Django 5.1.2 on 2025-01-03 17:48

import courses.models.base
import datetime
import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='SiteAccessGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('permission', models.CharField(max_length=50, unique=True)),
                ('description', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, max_length=500)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to=courses.models.base.user_directory_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'gif', 'png'])])),
                ('is_published', models.BooleanField(default=False)),
                ('completed', models.BooleanField(default=False)),
                ('certified', models.BooleanField(default=False)),
                ('slug', models.SlugField(unique=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('lesson_count', models.PositiveIntegerField(default=0)),
                ('likes', models.ManyToManyField(blank=True, related_name='course_likes', to=settings.AUTH_USER_MODEL)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('tag', models.ManyToManyField(blank=True, related_name='course_tag', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CourseSeason',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, null=True)),
                ('order', models.PositiveIntegerField(default=0)),
                ('lesson_count', models.PositiveIntegerField(default=0)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_course_season', to='courses.course')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200)),
                ('description', models.TextField(blank=True, max_length=500, null=True)),
                ('duration', models.DurationField(blank=True, default=datetime.timedelta(0), null=True)),
                ('order', models.PositiveIntegerField(default=0)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to=courses.models.base.user_directory_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'gif', 'png'])])),
                ('lesson_content', models.FileField(upload_to=courses.models.base.user_directory_path, validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['mp4', 'mpg', 'mp3'])])),
                ('completed', models.ManyToManyField(blank=True, related_name='lesson_completed', to=settings.AUTH_USER_MODEL)),
                ('course_season', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_lessons', to='courses.courseseason')),
                ('likes', models.ManyToManyField(blank=True, related_name='lesson_likes', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=25)),
                ('quote', models.CharField(max_length=500)),
                ('quote_speaker', models.CharField(max_length=50)),
                ('likes', models.ManyToManyField(blank=True, related_name='quote_likes', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CourseAccess',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('access_users', models.ManyToManyField(blank=True, related_name='fkey_accessible_users', to=settings.AUTH_USER_MODEL)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_access_entries', to='courses.course')),
                ('access_groups', models.ManyToManyField(blank=True, related_name='fkey_accessible_courses', to='courses.siteaccessgroup')),
            ],
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('icon', models.CharField(blank=True, max_length=20, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_subcategory', to='courses.category')),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='subcategory',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_course', to='courses.subcategory'),
        ),
        migrations.CreateModel(
            name='Certificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_issue', models.DateTimeField(auto_now_add=True)),
                ('certificate_status', models.CharField(choices=[('pending', 'Pending'), ('issued', 'Issued')], default='pending', max_length=10)),
                ('certificate_file', models.FileField(blank=True, null=True, upload_to='certificates/')),
                ('certificate_code', models.CharField(blank=True, editable=False, max_length=50, null=True, unique=True)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_certificate_student', to=settings.AUTH_USER_MODEL)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_certificate_course', to='courses.course')),
            ],
            options={
                'verbose_name': 'Certificate',
                'verbose_name_plural': 'Certificates',
                'unique_together': {('student', 'course')},
            },
        ),
        migrations.CreateModel(
            name='StudentProgress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('completed_lessons_count', models.PositiveIntegerField(default=0)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_student_progress', to='courses.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fkey_progress', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('student', 'course')},
            },
        ),
    ]