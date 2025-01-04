from django.utils import timezone
from datetime import timedelta
from .models import UserLoginHistory


class UpdateLastActivityMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        if request.user.is_authenticated:
            try:

                login_history = UserLoginHistory.objects.get(user=request.user)
                now = timezone.now()

                if now - login_history.last_activity > timedelta(minutes=1):
                    login_history.last_activity = now
                    login_history.save()

            except UserLoginHistory.DoesNotExist:

                UserLoginHistory.objects.create(user=request.user)

        response = self.get_response(request)

        return response