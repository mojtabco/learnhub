# from django.db import models
# from django.contrib.auth.models import User
# from datetime import timedelta
# from django.db.models.signals import post_save
# from django.db.models.signals import pre_delete
# from django.dispatch import receiver
from mutagen.mp3 import MP3
from moviepy.editor import VideoFileClip
import os

def user_directory_path(instance, filename):
    if hasattr(instance, 'course_season'):
        return f'user_{instance.course_season.course.owner.id}/{instance.course_season.course.id}/{instance.course_season.order}-{instance.course_season.id}/lesson-thumbnail-{filename}'
    else:
        return f'user_{instance.owner.id}/course-thumbnail/{filename}'

def extract_video_info(file):
    video = VideoFileClip(file)
    duration =  int(video.duration)
    title = os.path.basename(file)
    return {
        'duration': duration,
        'title': title
    }
def extract_music_info(file):
    audio = MP3(file)
    duration = int(audio.info.length)
    title = audio.get('TIT2', [os.path.basename(file)])[0]  # عنوان (با استفاده از تگ TIT2)
    return {
        'duration': duration,
        'title': title
    }

def get_media_info(file_path):
    filename, file_extension = os.path.splitext(file_path)
    video_types = ['.mp4', '.avi', '.mkv', '.webm']
    music_types = ['.mp3']

    if file_extension in video_types:
        return extract_video_info(file_path)
    elif file_extension in music_types:
        return extract_music_info(file_path)
    return {}

