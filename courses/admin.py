from django.contrib import admin
from courses.models import Category
from courses.models import SubCategory
from courses.models import Course
from courses.models import CourseSeason
from courses.models import Lesson
from courses.models.course_models import SiteAccessGroup, CourseAccess, Quote
from import_export.admin import ImportExportModelAdmin

from courses.models.lesson_models import StudentProgress, Certificate


# from .models import Quote


# Register your models here.
class CategoryCourse(admin.ModelAdmin):
    list_display = ['title', 'slug', 'updated','owner']
    search_fields = ['title', 'slug']
    list_filter =   ['updated']

class CategoryCourseSeason(admin.ModelAdmin):
    list_display = ['order', 'title','description','course']
    search_fields = ['title']

class CategoryLesson(admin.ModelAdmin):
    list_display = ['order','title', 'course_season','duration']
    search_fields = ['title']

class CategoryStudentProgress(admin.ModelAdmin):
    list_display = ['student','course', 'completed_lessons_count']
    search_fields = ['student']

@admin.register(Quote)
class QuoteAdmin(ImportExportModelAdmin):
    pass

@admin.register(SubCategory)
class SubCategoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(Category)
class CategoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('student', 'course', 'certificate_status', 'certificate_code')

# admin.site.register(Category)
admin.site.register(Course, CategoryCourse)
admin.site.register(CourseSeason,CategoryCourseSeason)
admin.site.register(Lesson,CategoryLesson)
admin.site.register(SiteAccessGroup)
admin.site.register(CourseAccess)
admin.site.register(StudentProgress,CategoryStudentProgress)








