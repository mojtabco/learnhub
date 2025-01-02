from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.db.models import Q
from django.http import Http404
from django.shortcuts import render
from django.views import View
from courses.forms import SearchForm
from courses.models import Course
from courses.views import LessonUpdateView, MyLessonView, SeasonUpdateView, MySeasonView, CourseUpdateView, \
    paginate_queryset
import os

class MyCourseAdminView(View):
    template_name = "courses/admin-page/mycourse-admin.html"
    form_class = SearchForm

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, form_search, courses_data, breadcrumbs):
        return {
            'form_search': form_search,
            'courses_data': courses_data,
            'breadcrumbs': breadcrumbs,
        }

    def get(self, request, *args, **kwargs):
        form_search = self.form_class(request.GET)
        search_text = form_search.cleaned_data.get("SearchText") if form_search.is_valid() else None

        course_queryset = Course.objects.order_by('-updated')
        if search_text:
            course_queryset = course_queryset.filter(
                Q(title__icontains=search_text) |
                Q(description__icontains=search_text) |
                Q(owner__username__icontains=search_text) |
                Q(owner__first_name__icontains=search_text) |
                Q(owner__last_name__icontains=search_text)
            )

        # courses_data = course_queryset
        # Pagination
        courses_data = paginate_queryset(course_queryset, request, per_page=6)

        breadcrumbs = [
            {"label": "فایل های کاربران", "url": ""},
            {"label": "داشبورد", "url": "/"},
        ]

        context = self.get_context_data(form_search, courses_data, breadcrumbs)
        return render(request, self.template_name, context)

class MyCourseAdminUserView(View):
    template_name = "courses/admin-page/mycourse-admin.html"

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, courses_data):
        return {
            'courses_data': courses_data,
        }

    def get(self, request, id, *args, **kwargs):
        courses_data = Course.objects.filter(owner=id).order_by('-updated')
        context = self.get_context_data(courses_data)
        return render(request, self.template_name, context)

class CourseUpdateAdminView(CourseUpdateView):
    template_name = "courses/admin-page/course-update-admin.html"
    mycourse_url = 'mycourse-admin'
    courseupdate_url = 'courseupdate-admin'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, request):
        context = super().get_context_data(request)  # دریافت context از کلاس پدر

        context['breadcrumbs'] = [
            {"label": "ویرایش دوره کاربران", "url": ""},
            {"label": "فایل های کاربران", "url": "/courses/admin"},
            {"label": "داشبورد", "url": "/"}
        ]
        return context

class MySeasonAdminView(MySeasonView):
    template_name = "courses/admin-page/myseason-admin.html"
    myseason_url = 'myseason-admin'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self):
        context = super().get_context_data()  # دریافت context از کلاس پدر

        context['breadcrumbs'] = [
            {"label": "فصل ها", "url": ""},
            {"label": "فایل های کاربران", "url": "/courses/admin"},
            {"label": "داشبورد", "url": "/"},
        ]
        return context

class SeasonUpdateAdminView(SeasonUpdateView):
    template_name = "courses/admin-page/season-update-admin.html"
    myseason_url = 'myseason-admin'
    seasonupdate_url = 'seasonupdate-admin'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, request):
        context = super().get_context_data(request)  # دریافت context از کلاس پدر

        context['breadcrumbs'] = [
            {"label": "  ویرایش فصل", "url": ""},
            {"label": "فصل ها", "url": f"/courses/myseason/{self.course.id}/admin"},
            {"label": "فایل های کاربران", "url": "/courses/admin"},
            {"label": "داشبورد", "url": "/"},
        ]
        return context

class MyLessonAdminView(MyLessonView):
    template_name = "courses/admin-page/mylesson-admin.html"
    mylesson_url = 'mylesson-admin'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, request):
        context = super().get_context_data(request)  # دریافت context از کلاس پدر

        context['breadcrumbs'] = [
            {"label": "درس ها", "url": ""},
            {"label": "فصل ها", "url": f"/courses/myseason/{self.course.id}/admin"},
            {"label": "فایل های کاربران", "url": "/courses/admin"},
            {"label": "داشبورد", "url": "/"},
        ]
        return context

class LessonUpdateAdminView(LessonUpdateView):
    template_name = "courses/admin-page/lesson-update-admin.html"
    lesson_url = 'mylesson-admin'
    lessonupdate_url = 'lessonupdate-admin'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, request):
        context = super().get_context_data(request)  # دریافت context از کلاس پدر

        context['breadcrumbs'] = [
            {"label": "ویرایش درس", "url": ""},
            {"label": "درس ها", "url": f"/courses/mylesson/{self.lesson.id}/admin"},
            {"label": "فصل ها", "url": f"/courses/myseason/{self.course.id}/admin"},
            {"label": "فایل های کاربران", "url": "/courses/admin"},
            {"label": "داشبورد", "url": "/"},
        ]
        return context


