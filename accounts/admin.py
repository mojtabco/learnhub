from django.contrib import admin
from accounts.models import ProfileUser, SiteAccessUser
from accounts.models import UserLoginHistory

# Register your models here.

class CategoryProfileUser(admin.ModelAdmin):
    list_display = ['user','phone_number','gender']
    search_fields = ['user','phone_number']
    list_filter = ['gender']

class CategoryUserLoginHistory(admin.ModelAdmin):
    list_display = ['user', 'login_time', 'last_activity','logout_time','ip_address']
    search_fields = ['user']


admin.site.register(ProfileUser,CategoryProfileUser)
admin.site.register(UserLoginHistory,CategoryUserLoginHistory)
admin.site.register(SiteAccessUser)



