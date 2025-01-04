from django.conf import settings

from accounts.models import UserLoginHistory


def card_shadow(request):
    return {
        'CARD_SHADOW': settings.CARD_SHADOW,
    }

# def user_status(request):
#
#     UserLoginHistory.objects.filter(user=request).last_activity()
#
#     return UserLoginHistory.objects.filter(user=request).last_activity()
