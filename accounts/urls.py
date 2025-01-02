from django.urls import path
from accounts import views
urlpatterns = [
    path('accounts/profile', views.ProfileView.as_view(), name='profile'),
    path('accounts/login', views.LoginView.as_view(), name='login'),
    path('accounts/register', views.RegisterView.as_view(), name='register'),
    path('accounts/lockscreen', views.LockscreenView.as_view(), name='lockscreen'),
    path('accounts/logout', views.LogoutView.as_view(), name='logout'),
    path('accounts/recover', views.RecoverView.as_view(), name='recover'),
    path('accounts/users', views.UsersView.as_view(), name='users'),
    path('accounts/user/update/<int:id>', views.UserUpdateView.as_view(), name='user-update'),
    path('accounts/groups', views.GroupsView.as_view(), name='groups'),
    path('accounts/group/update/<int:id>', views.GroupUpdateView.as_view(), name='group-update'),

]