from django.contrib.auth.decorators import user_passes_test, login_required

def superuser_required(view_func):
    @login_required(login_url='login')
    @user_passes_test(lambda u: u.is_superuser, login_url='index')
    def wrapped_view(request, *args, **kwargs):
        return view_func(request, *args, **kwargs)
    return wrapped_view