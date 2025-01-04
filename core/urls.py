from django.urls import path
from core import views
urlpatterns = [
    path('', views.indexView, name='index'),
    path('core/404', views.E404View.as_view(), name='e404'),
    path('core/soon', views.SoonView.as_view(), name='soon'),
    path('core/site', views.SiteView.as_view(), name='site_setting'),

]