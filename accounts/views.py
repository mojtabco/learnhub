from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Prefetch, Q
from django.http import Http404
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.views import View
from accounts.forms import RegistrationForm, LoginForm, ProfileUserForm, UserForm, ProfileUsersForm, \
    ProfileUserAccessForm, SiteAccessGroupForm
from accounts.models import ProfileUser, UserLoginHistory
from django.contrib import messages
from django.utils import timezone,translation
from datetime import timedelta
from courses.forms import SearchForm
from courses.models import Course
from courses.models.course_models import SiteAccessGroup
from courses.views import paginate_queryset, restrict_demo_user


# Create your views here.
class ProfileView(LoginRequiredMixin, View):
    login_url = 'login'
    template_name = "accounts/profile.html"

    def get_user_profile(self, request, *args, **kwargs):
        try:
            user = request.user
            profile = ProfileUser.objects.get(user=user)
            access_groups = profile.access_groups.all()
            access_user = profile.access_users.all()
        except ObjectDoesNotExist as e:
            raise Http404(f"خطا: {str(e)}")
        return profile, access_groups, access_user

    def get(self, request, *args, **kwargs):
        user = request.user
        profile,access_groups,access_user = self.get_user_profile( request, *args, **kwargs)

        form_user = UserForm(instance=user)
        form = ProfileUserForm(instance=profile)

        breadcrumbs = [
            {"label": "پروفایل", "url": ""},
            {"label": "داشبورد", "url": "/"},
        ]
        context = {
            'form': form,
            'profile': profile,
            'access_groups': access_groups,
            'access_user': access_user,
            'form_user': form_user,
            'breadcrumbs': breadcrumbs,
        }
        return render(request, self.template_name, context)

    # TODO: Remove this decorator in the final version as it is intended for demo purposes only.
    @restrict_demo_user
    def post(self, request, *args, **kwargs):
        user = request.user
        profile,_,_ = self.get_user_profile( request, *args, **kwargs)

        action = request.POST.get('action')
        if action == 'OkayProfile':
            return self.update_profile(request, user, profile)
        elif action == 'OkayPassword':
            return self.update_password(request, user)

        return redirect('profile')

    def update_profile(self, request, user, profile):
        form = ProfileUserForm(request.POST, request.FILES, instance=profile)
        form_user = UserForm(request.POST, request.FILES, instance=user)

        if form.is_valid() and form_user.is_valid():
            if form.has_changed() or form_user.has_changed():
                form_user.instance.is_active = True
                form.save()
                form_user.save()
            else:
                messages.info(request, "تغییری برای ذخیره‌سازی وجود ندارد.")
        else:
            messages.error(request, "خطایی رخ داد. لطفا فرم‌ها را درست پر کنید.")

        return redirect('profile')

    def update_password(self, request, user):
        current_password = request.POST.get("current_password")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")

        if not user.check_password(current_password):
            messages.error(request, "رمز عبور فعلی نادرست است.")
            return redirect('profile')

        if password != confirm_password:
            messages.error(request, "رمزهای جدید مطابقت ندارند.")
            return redirect('profile')

        user.set_password(password)
        user.save()
        login(request, user)
        messages.success(request, "رمز عبور شما با موفقیت به‌روزرسانی شد.")
        return redirect('profile')

class LoginView(View):
    template_name = 'accounts/auth-login.html'

    def get(self, request, *args, **kwargs):
        form = LoginForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('index')
            else:
                messages.error(request, "نام کاربری یا کلمه عبور نادرست است.")
        else:
            messages.error(request, "لطفاً فرم را به درستی پر کنید.")

        return render(request, self.template_name, {'form': form})

class RegisterView(View):
    template_name = 'accounts/auth-register.html'

    def get(self, request, *args, **kwargs):
        form = RegistrationForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = RegistrationForm(request.POST)
        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.set_password(form.cleaned_data['password'])
            new_user.save()
            login(request, new_user)
            return redirect('index')
        else:
            messages.error(request, "لطفاً فرم را به درستی پر کنید.")

        return render(request, self.template_name, {'form': form})

class LockscreenView(View):
    template_name = 'accounts/auth-lockscreen.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):

        password = request.POST.get('password')
        username = request.user.username if request.user.is_authenticated else None
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect(reverse('index'))
        else:
            messages.error(request, "رمز اشتباه است")

        return render(request, self.template_name)

class LogoutView(View):
    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect('index')

class RecoverView(View):
    template_name = 'accounts/auth-recover.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

class UsersView(View):
    template_name = 'accounts/users.html'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_search_text(self, request):
        form_search = SearchForm(request.GET)
        search_text = form_search.cleaned_data.get("SearchText") if form_search.is_valid() else None
        return form_search, search_text

    def get(self, request, *args, **kwargs):

        translation.activate('fa')
        form_search, search_text = self.get_search_text(request)

        try:
            users_data = User.objects.all()
            if search_text:
                users_data = users_data.filter(
                    Q(user__username__icontains=search_text) |
                    Q(user__first_name__icontains=search_text) |
                    Q(user__last_name__icontains=search_text))


        except User.DoesNotExist:
            raise Http404("اطلاعات برای کاربر وجود ندارد")

        time_minutes_ago = timezone.now() - timedelta(minutes=settings.TIME_MINUTES_AGO)

        form = RegistrationForm(initial={'username': '', 'password': '', 'confirm_password': ''})

        # Pagination
        users_data = paginate_queryset(users_data, request, per_page=6)

        breadcrumbs = [
            {"label": "دسترسی کاربران", "url": ""},
            {"label": "داشبورد", "url": "/"},
        ]

        context = {
            'form': form,
            'form_search': SearchForm(request.GET),
            'users_data': users_data,
            'time_minutes_ago': time_minutes_ago,
            'breadcrumbs': breadcrumbs
        }

        return render(request, self.template_name, context)

    # TODO: Remove this decorator in the final version as it is intended for demo purposes only.
    @restrict_demo_user
    def post(self, request, *args, **kwargs):

        form = RegistrationForm(request.POST)

        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.username = form.cleaned_data['username']
            new_user.set_password(form.cleaned_data['password'])
            new_user.save()
            return redirect('users')
        else:
            messages.error(request, "لطفاً فرم را به درستی پر کنید")

        return render(request, self.template_name, {'form': form})

class UserUpdateView(View):
    template_name = 'accounts/user-update.html'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_user_and_profile(self, id):
        try:
            user = User.objects.get(pk=id)
            profile = ProfileUser.objects.get(user=user)
            return user, profile
        except User.DoesNotExist:
            raise Http404("کاربری وجود ندارد")
        except ProfileUser.DoesNotExist:
            raise Http404("پروفایل کاربر وجود ندارد")

    def get(self, request, id, *args, **kwargs):
        translation.activate('fa')

        user, profile = self.get_user_and_profile(id)
        if not user or not profile:
            return redirect('e404')

        course_count = Course.objects.filter(owner=user).count()

        form_user = UserForm(instance=user)
        form = ProfileUsersForm(instance=profile)
        form_access = ProfileUserAccessForm(instance=profile)

        breadcrumbs = [
            {"label": "ویرایش کاربر", "url": ""},
            {"label": "دسترسی کاربران", "url": "/accounts/users"},
            {"label": "داشبورد", "url": "/"},
        ]

        context = {
            'form': form,
            'profile': profile,
            'form_user': form_user,
            'form_access': form_access,
            'course_count': course_count,
            'breadcrumbs': breadcrumbs
        }

        return render(request, self.template_name, context)

    # TODO: Remove this decorator in the final version as it is intended for demo purposes only.
    @restrict_demo_user
    def post(self, request, id, *args, **kwargs):

        user, profile = self.get_user_and_profile(id)

        form = ProfileUsersForm(request.POST, request.FILES, instance=profile)
        form_access = ProfileUserAccessForm(request.POST, instance=profile)
        form_user = UserForm(request.POST, instance=user)

        action = request.POST.get('action')

        if action == 'OkayUpdate':
            return self.handle_update(request, user, profile, form, form_user)
        elif action == 'OkayAccess':
            return self.handle_access(request, form_access)
        elif action == 'OkayPassword':
            return self.handle_password(request, user)
        elif action == 'OkayDelete':
            return self.handle_delete(request, user, profile)

        return render(request, self.template_name, {'form': form, 'profile': profile, 'form_user': form_user, 'form_access': form_access})

    def handle_update(self, request, user, profile, form, form_user):
        if form.is_valid() and form_user.is_valid():
            if form.has_changed() or form_user.has_changed():
                form_user.instance.is_active = True
                form.save()
                form_user.save()
            else:
                messages.info(request, 'تغییری برای ذخیره‌سازی وجود ندارد.')
        else:
            messages.error(request, 'لطفاً فرم‌ها را به درستی پر کنید.')
        return redirect(reverse('user-update', kwargs={'id': user.id}))

    def handle_access(self, request, form_access):
        if form_access.is_valid():
            if form_access.has_changed():
                form_access.save()
            else:
                messages.info(request, 'تغییری در دسترسی‌ها وجود ندارد.')
        else:
            messages.error(request, 'لطفاً فرم دسترسی را به درستی پر کنید.')
        return redirect(reverse('user-update', kwargs={'id': form_access.instance.user.id}))

    def handle_password(self, request, user):
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")

        if password and confirm_password and password == confirm_password:
            user.set_password(confirm_password)
            user.save()
            return redirect(reverse('user-update', kwargs={'id': user.id}))
        else:
            messages.error(request, 'رمزها مطابقت ندارند، لطفاً فرم را به درستی پر کنید.')
            return redirect(reverse('user-update', kwargs={'id': user.id}))

    def handle_delete(self, request, user, profile):
        profile.delete()
        user.delete()
        messages.success(request, 'کاربر با موفقیت حذف شد.')
        return redirect('users')

class GroupsView(View):
    template_name = 'accounts/groups.html'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_group_users_map(self):
        try:
            access_groups = SiteAccessGroup.objects.all()
            group_users_map = []
            for group in access_groups:
                profiles = group.fkey_members.all()
                users = profiles.values_list('user__username', flat=True)
                group_users_map.append({'group': group, 'users': users})
            return group_users_map
        except SiteAccessGroup.DoesNotExist:
            raise Http404("دسته بندی برای گروه تعریف نشده است")

    def get(self, request, *args, **kwargs):
        group_users_map = self.get_group_users_map()
        if group_users_map is None:
            return redirect('e404')

        form = SiteAccessGroupForm()
        breadcrumbs = [
            {"label": "دسترسی گروه‌ها", "url": ""},
            {"label": "داشبورد", "url": "/"},
        ]
        context = {
            'form': form,
            'group_users_map': group_users_map,
            'breadcrumbs': breadcrumbs
        }

        return render(request, self.template_name, context)

    # TODO: Remove this decorator in the final version as it is intended for demo purposes only.
    @restrict_demo_user
    def post(self, request, *args, **kwargs):
        form = SiteAccessGroupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('groups')
        else:
            messages.error(request, "لطفاً فرم را به درستی پر کنید.")
            return render(request, self.template_name, {'form': form})

class GroupUpdateView(View):
    template_name = 'accounts/group-update.html'

    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            raise Http404("شما اجازه دسترسی به این صفحه را ندارید.")
        return super().dispatch(request, *args, **kwargs)

    def get_group_user_map(self, group_id):
        try:
            access_group = SiteAccessGroup.objects.get(id=group_id)
            profiles = access_group.fkey_members.all()
            users = profiles.values_list('user__username', flat=True)
            return [{'group': access_group, 'users': users}]
        except SiteAccessGroup.DoesNotExist:
            raise Http404("دسته بندی برای گروه تعریف نشده است")

    def get(self, request, id, *args, **kwargs):
        group_user_map = self.get_group_user_map(id)
        # if group_user_map is None:
        #     return redirect('e404')

        form = SiteAccessGroupForm(instance=group_user_map[0]['group'])
        breadcrumbs = [
            {"label": "ویرایش گروه", "url": ""},
            {"label": "دسترسی گروه‌ها", "url": "/accounts/groups"},
            {"label": "داشبورد", "url": "/"},
        ]
        context = {
            'form': form,
            'group_user_map': group_user_map,
            'breadcrumbs': breadcrumbs
        }
        return render(request, self.template_name, context)

    # TODO: Remove this decorator in the final version as it is intended for demo purposes only.
    @restrict_demo_user
    def post(self, request, id, *args, **kwargs):
        action = request.POST.get('action')
        try:
            access_group = SiteAccessGroup.objects.get(id=id)
        except SiteAccessGroup.DoesNotExist:
            raise Http404("دسته بندی برای گروه تعریف نشده است")

        if action == 'OkayDelete':
            access_group.delete()
            return redirect('groups')

        elif action == 'OkayUpdate':
            form = SiteAccessGroupForm(request.POST, instance=access_group)
            if form.is_valid() and form.has_changed():
                form.save()
                return redirect(reverse('group-update', kwargs={'id': id}))
            else:
                messages.error(request, 'لطفاً فرم را به درستی پر کنید.')

        return redirect(reverse('group-update', kwargs={'id': id}))




