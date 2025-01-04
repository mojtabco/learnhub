from django.http import Http404
from docx2pdf import convert

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib import messages

from functools import wraps

def number_to_words(number):
    numbers_dict = {
        1: "یکم",
        2: "دوم",
        3: "سوم",
        4: "چهارم",
        5: "پنجم",
        6: "ششم",
        7: "هفتم",
        8: "هشتم",
        9: "نهم"
    }
    if 1 <= number <= 9:
        return numbers_dict[number]
    else:
        return 0

def convert_docx_to_pdf(docx_path, pdf_path):
    try:
        convert(docx_path, pdf_path)
        return pdf_path
    except Exception as e:
        print(f"Error converting DOCX to PDF: {e}")
        return None


def paginate_queryset(queryset, request, per_page=10):

    paginator = Paginator(queryset, per_page)
    page = request.GET.get('page')

    try:
        return paginator.page(page)
    except PageNotAnInteger:
        return paginator.page(1)  # اگر شماره صفحه عدد صحیح نبود صفحه اول را نشان بده
    except EmptyPage:
        return paginator.page(paginator.num_pages)  # اگر صفحه خارج از محدوده بود، آخرین صفحه را نشان بده


def is_demo_user(request):

    if request.user.username == "demo":
        messages.error(request, "شما از نسخه دمو استفاده می‌کنید این امکان برای کاربر دمو فعال نمی باشد.")
        return True
    return None

def restrict_demo_user(func):
    @wraps(func)
    def wrapper(self, request, *args, **kwargs):
        if request.user.username == "demo":
            raise Http404("شما از نسخه دمو استفاده می‌کنید این امکان برای کاربر دمو فعال نمی باشد")
        return func(self, request, *args, **kwargs)
    return wrapper
