from django.http import Http404
from django.shortcuts import render, redirect
from datetime import timedelta

from django.templatetags.static import static
from django.utils import timezone,translation
from django.views import View
from django.views.generic import TemplateView

from accounts.models import ProfileUser, UserLoginHistory, SiteAccessUser
from core.forms import SiteSettingForm
from core.models import SiteSetting
from courses.models import Course, Lesson, Category
from django.contrib.auth.models import User
from courses.models.course_models import CourseAccess, SiteAccessGroup, Quote
from learnhub import settings
import random
# Create your views here.
from django.db.models import Count, Sum, Case, When, Value, IntegerField
def indexView(request):

    request.session['ip'] = request.META.get('HTTP_X_FORWARDED_FOR', request.META.get('REMOTE_ADDR'))
    translation.activate('fa')

    site_setting = SiteSetting.objects.get_or_create()
    SiteAccessGroup.objects.get_or_create(permission = settings.COURSE_EVERYONE,defaults = {"description": "گروه دسترسی پیش فرض برای همه"})
    SiteAccessUser.objects.get_or_create(permission=settings.USER_ALL_ACCESS,defaults={"description": "Full access to all users"})
    SiteAccessUser.objects.get_or_create(permission=settings.USER_DELETE,defaults={"description": "Permission to delete user data"})
    SiteAccessUser.objects.get_or_create(permission=settings.USER_DOWNLOAD,defaults={"description": "Permission to download user data"})
    SiteAccessUser.objects.get_or_create(permission=settings.USER_UPLOAD, defaults={"description": "Permission to upload user data"})
    SiteAccessUser.objects.get_or_create(permission=settings.USER_COURSE_ACCESS, defaults={"description": "Access to courses for users"})


    total_courses = Course.objects.count()
    courses_data = Course.objects.filter(lesson_count__gt=0, is_published=True).order_by('-created')[:5]
    courses_updated = Course.objects.filter(lesson_count__gt=0, is_published=True).order_by('-updated')[:5]
    total_likes = Course.objects.aggregate(total_likes=Count('likes'))['total_likes']
    total_tag = Course.objects.filter(tag__isnull=False).count()

    categorys_data = Category.objects.all()[1:]
    total_users = User.objects.count()

    lesson_counts = Lesson.objects.aggregate(
        total_lessons=Count('id'),
        video_lessons_count=Count(Case(When(lesson_content__endswith='.mp4', then=Value(1)), output_field=IntegerField())),
        audio_lessons_count=Count(Case(When(lesson_content__endswith='.mp3', then=Value(1)), output_field=IntegerField())),
        pdf_lessons_count=Count(Case(When(lesson_content__endswith='.pdf', then=Value(1)), output_field=IntegerField())),
        total_duration=Sum('duration')
    )

    total_lessons = lesson_counts['total_lessons']
    video_lessons_count = lesson_counts['video_lessons_count']
    audio_lessons_count = lesson_counts['audio_lessons_count']
    pdf_lessons_count = lesson_counts['pdf_lessons_count']
    total_duration = lesson_counts['total_duration']

    quotes_data = []
    all_ids = list(Quote.objects.values_list('id', flat=True))
    if all_ids:
        random_ids = random.sample(all_ids, min(12, len(all_ids)))
        quotes_data = Quote.objects.filter(id__in=random_ids)


    breadcrumbs = [
        {"label": "داشبورد", "url": "/"},
    ]

    if request.user.is_authenticated and request.user.is_superuser :

        time_minutes_ago = timezone.now() - timedelta(minutes=settings.TIME_MINUTES_AGO)
        users_data = User.objects.all()

        return render(request, "core/index.html", {'total_courses': total_courses,
                                               'total_users': total_users,
                                               'total_lessons': total_lessons,
                                               'video_lessons_count': video_lessons_count,
                                               'audio_lessons_count': audio_lessons_count,
                                               'pdf_lessons_count': pdf_lessons_count,
                                               'categorys_data': categorys_data,
                                               'time_minutes_ago': time_minutes_ago,
                                               'users_data':users_data,
                                               'total_duration':total_duration,
                                               'total_likes': total_likes,
                                               'total_tag': total_tag,
                                               'courses_data': courses_data,
                                               'courses_data_update': courses_updated,
                                               'site_setting': site_setting,
                                               'quotes_data':quotes_data,
                                               'breadcrumbs':breadcrumbs,
                                               "ip_client": request.session['ip']})
    else:
        return render(request, "core/index.html", {'total_courses': total_courses,
                                                   'total_users': total_users,
                                                   'total_lessons': total_lessons,
                                                   'video_lessons_count': video_lessons_count,
                                                   'audio_lessons_count': audio_lessons_count,
                                                   'pdf_lessons_count': pdf_lessons_count,
                                                   'categorys_data': categorys_data,
                                                   'total_duration': total_duration,
                                                   'total_likes': total_likes,
                                                   'total_tag': total_tag,
                                                   'courses_data': courses_data,
                                                   'courses_data_update': courses_updated,
                                                   'site_setting': site_setting,
                                                   'quotes_data': quotes_data,
                                                   'breadcrumbs': breadcrumbs,
                                                   "ip_client": request.session['ip']})


class E404View(TemplateView):
    template_name = 'core/e404.html'

class SoonView(TemplateView):
    template_name = 'core/soon.html'

class SiteView(View):
    template_name = 'core/site-settings.html'

    def get(self, request, *args, **kwargs):
        try:
            site_setting = SiteSetting.objects.first()
        except SiteSetting.DoesNotExist:
            raise Http404("هیچ اطلاعاتی برای سایت تعریف نشده است.")

        form = SiteSettingForm(instance=site_setting)
        breadcrumbs = [
            {"label": "تنظیمات سایت", "url": ""},
            {"label": "داشبورد", "url": "/"},
        ]

        return render(request, self.template_name, {'form': form, 'breadcrumbs': breadcrumbs})


def is_user_online(profile):
    now = timezone.now()
    return now - profile.last_activity < timedelta(minutes=1)
