from django.http import HttpResponseNotFound
from django.shortcuts import render


# class PageNotFoundView(TemplateView):
#     template_name = 'e404.html'

def PageNotFoundView(request, exception):
    return HttpResponseNotFound(render(request, '404.html'))