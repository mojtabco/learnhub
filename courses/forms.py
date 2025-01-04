from django import forms
from django.core.validators import FileExtensionValidator
from courses.models import Course, CourseSeason, Lesson
from courses.models.course_models import CourseAccess
from learnhub import settings



class CourseAccessForm(forms.ModelForm):
    class Meta:
        model = CourseAccess
        fields = ('access_users','access_groups')
        widgets = {
            'access_users': forms.SelectMultiple(attrs={'class': 'form-control text-end'}),
            'access_groups': forms.SelectMultiple(attrs={'class': 'form-control text-end'}),

        }

class SearchForm(forms.Form):
    SearchText = forms.CharField(
        max_length=120,
        required=False,
        widget=forms.TextInput(attrs={'class': 'form-control form-control-sm', 'placeholder': 'جستجو...'})
    )

class CreateCourseForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = ('title', 'description','thumbnail','subcategory','is_published','completed','certified')
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control','placeholder': 'آموزش Node.js'}),
            'description': forms.Textarea(attrs={'class': 'form-control','placeholder': settings.COURSE_DESCRIPTION}),
            'thumbnail': forms.FileInput(attrs={'class': 'form-control','accept': 'image/jpeg, image/png, image/gif'}),
            'subcategory': forms.Select(attrs={'class': 'form-select'}),
            'is_published': forms.CheckboxInput (attrs={'class': 'form-check-input'}),
            'completed': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
            'certified': forms.CheckboxInput(attrs={'class': 'form-check-input'})
        }

class CourseSeasonForm(forms.ModelForm):
    class Meta:
        model = CourseSeason
        fields = ('title', 'description')
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control','placeholder': 'مثال: فصل '}),
            'description': forms.Textarea(attrs={'class': 'form-control'})
        }


class LessonForm(forms.ModelForm):
    lesson_content = forms.FileField(
        widget=forms.FileInput(attrs={'class': 'form-control', 'accept': '.mp4, .mpg, .mp3'}),
        validators=[FileExtensionValidator(allowed_extensions=['mp4', 'mpg', 'mp3'])]
    )

    class Meta:
        model = Lesson
        fields = ('title', 'description', 'duration', 'thumbnail', 'lesson_content')
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'آموزش Node.js'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'placeholder': getattr(settings, 'LESSON_DESCRIPTION', 'توضیحات درس')}),
            'duration': forms.NumberInput(attrs={'class': 'form-control'}),
            'thumbnail': forms.FileInput(attrs={'class': 'form-control', 'accept': 'image/jpeg, image/png, image/gif'}),
        }




