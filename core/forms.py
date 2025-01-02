from django import forms

from core.models import SiteSetting


class SiteSettingForm(forms.ModelForm):
    class Meta:
        model = SiteSetting
        exclude = ('deployment_time',)
        widgets = {
            'site_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'نام سایت را وارد کنید'}),
            'site_url': forms.URLInput(attrs={'class': 'form-control', 'placeholder': 'آدرس سایت را وارد کنید'}),
            'site_title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'عنوان سایت را وارد کنید'}),
            'site_creator': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'نام سازنده سایت'}),
            'site_description': forms.Textarea(attrs={'class': 'form-control', 'rows': 3, 'placeholder': 'توضیحات سایت'}),
            'site_icon': forms.FileInput(attrs={'class': 'form-control'}),
            'site_logo': forms.FileInput(attrs={'class': 'form-control'}),
            'version': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'نسخه سایت'}),
            'contact_address': forms.Textarea(attrs={'class': 'form-control', 'rows': 2, 'placeholder': 'آدرس تماس'}),
            'contact_phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'شماره تماس'}),
            'contact_email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'ایمیل تماس'}),
            'contact_location': forms.TextInput(
                attrs={'class': 'form-control', 'placeholder': 'موقعیت مکانی (عرض و طول جغرافیایی)'}
            ),
        }
