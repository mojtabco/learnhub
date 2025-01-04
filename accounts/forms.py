from django import forms
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from accounts.models import ProfileUser
from courses.models.course_models import SiteAccessGroup


class SiteAccessGroupForm(forms.ModelForm):
    class Meta:
        model = SiteAccessGroup
        fields = ('permission', 'description')
        widgets = {
            'permission': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control'}),
        }

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name','email','is_active')
        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }


class ProfileUserForm(forms.ModelForm):
    class Meta:
        model = ProfileUser
        fields = ('website','phone_number','gender','profile_picture','is_published')
        widgets = {
            'website': forms.URLInput(attrs={'class': 'form-control'}),
            'phone_number': forms.TextInput(attrs={'class': 'form-control text-end'}),
            'gender': forms.Select(attrs={'class': 'form-select'}),
            'profile_picture': forms.FileInput(attrs={'class': 'form-control'}),
            # 'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
            'is_published': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }


class ProfileUsersForm(forms.ModelForm):
    class Meta:
        model = ProfileUser
        fields = ('website','phone_number','gender','profile_picture','access_groups','is_published')
        widgets = {
            'website': forms.URLInput(attrs={'class': 'form-control'}),
            'phone_number': forms.TextInput(attrs={'class': 'form-control text-end'}),
            'gender': forms.Select(attrs={'class': 'form-select'}),
            'profile_picture': forms.FileInput(attrs={'class': 'form-control'}),
            # 'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
            'is_published': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }

class ProfileUserAccessForm(forms.ModelForm):
    class Meta:
        model = ProfileUser
        fields = ('access_users','access_groups')
        widgets = {
            'access_users': forms.SelectMultiple(attrs={'class': 'form-control text-end'}),
            'access_groups': forms.SelectMultiple(attrs={'class': 'form-control text-end'}),
        }


class LoginForm(forms.Form):
    username = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'form-control','placeholder': 'شناسه کاربری وارد کنید'}))
    password = forms.CharField(max_length=40, widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': 'رمزعبور را وارد کنید'}))


class RegistrationForm(forms.ModelForm):
    username = forms.CharField(max_length=20, widget=forms.TextInput(attrs={'class': 'form-control','placeholder': 'شناسه کاربری وارد کنید','autocomplete': 'new-username'}))
    password = forms.CharField(max_length=20, widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': 'رمزعبور را وارد کنید','autocomplete': 'new-username'}))
    confirm_password = forms.CharField(max_length=40, widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': 'رمزعبور را مجدد وارد کنید','autocomplete': 'new-username'}))

    class Meta:
        model = User
        fields = ['username', 'password']

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")
        username = cleaned_data.get("username")

        if username and User.objects.filter(username=username).exists():
            raise ValidationError("کاربری با این عنوان وجود دارد.")

        if password and confirm_password and password != confirm_password:
            raise ValidationError("پسوردها مطابقت ندارند.")

        return cleaned_data



