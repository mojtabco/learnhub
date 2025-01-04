# Generated by Django 5.1.2 on 2025-01-03 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SiteSetting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_name', models.CharField(default='LearnHub', max_length=20)),
                ('site_url', models.URLField(default='https://github.com/mojtabco/learnhub')),
                ('site_title', models.CharField(default='Sharing and visibility hub', max_length=40)),
                ('site_creator', models.CharField(default='Mojtaba Askari', max_length=20)),
                ('site_description', models.TextField(default='Sharing and visibility hub')),
                ('site_icon', models.ImageField(blank=True, null=True, upload_to='site/')),
                ('site_logo', models.ImageField(blank=True, null=True, upload_to='site/')),
                ('deployment_time', models.DateTimeField(auto_now=True)),
                ('version', models.CharField(default='1.2583H9', max_length=10)),
                ('contact_address', models.TextField(default='Tehran Iran', max_length=200)),
                ('contact_phone', models.CharField(default='09128886225', max_length=20)),
                ('contact_email', models.EmailField(default='mojtabco@gmail.com', max_length=254)),
                ('contact_location', models.CharField(default='35.769649,51.425775', max_length=20)),
            ],
        ),
    ]
