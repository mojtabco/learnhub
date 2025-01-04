from django.urls import path
from .views import user_views, admin_views

urlpatterns = [
    # User View
    path('courses/search', user_views.SearchView.as_view(), name='search'),
    path('courses/view/<int:cid>', user_views.ViewView.as_view(), name='view'),
    path('courses/view/<int:cid>/<int:lid>', user_views.ViewView.as_view(), name='view'),
    path('courses/', user_views.MyCourseView.as_view(), name='mycourse'),
    path('courses/myseason/<int:id>', user_views.MySeasonView.as_view(), name='myseason'),
    path('courses/mylesson/<int:id>', user_views.MyLessonView.as_view(), name='mylesson'),
    path('courses/update/<int:id>', user_views.CourseUpdateView.as_view(), name='courseupdate'),
    path('courses/season/update/<int:id>', user_views.SeasonUpdateView.as_view(), name='seasonupdate'),
    path('courses/lesson/update/<int:id>', user_views.LessonUpdateView.as_view(), name='lessonupdate'),
    path('courses/quote', user_views.QuoteView.as_view(), name='quote'),
    path('tags/', user_views.MyTagView.as_view(), name='mytag'),
    path('lesson/<int:id>/like', user_views.LessonLike_APIView.as_view(), name='lesson_like'),
    path('lesson/<int:id>/completed', user_views.LessonCompleted_APIView.as_view(), name='lesson_completed'),
    path('course/<int:id>/like', user_views.CourseLike_APIView.as_view(), name='course_like'),
    path('course/<int:id>/tag', user_views.CourseTag_APIView.as_view(), name='course_tag'),
    path('course/quote/<int:id>/like', user_views.QuoteLike_APIView.as_view(), name='quote_like'),
    path('certificate/', user_views.MyCertificateView.as_view(), name='mycertificate'),
    path('certificaterequest/<int:id>', user_views.certificate_requestView, name='certificate_request'),
    path('certificatepdf/<int:id>', user_views.certificate_pdfView, name='certificate_pdf'),


    # Admin View
    path('courses/admin', admin_views.MyCourseAdminView.as_view(), name='mycourse-admin'),
    path('courses/<int:id>/admin', admin_views.MyCourseAdminUserView.as_view(), name='mycourse-admin-user'),
    path('courses/update/<int:id>/admin', admin_views.CourseUpdateAdminView.as_view(), name='courseupdate-admin'),
    path('courses/myseason/<int:id>/admin', admin_views.MySeasonAdminView.as_view(), name='myseason-admin'),
    path('courses/season/update/<int:id>/admin', admin_views.SeasonUpdateAdminView.as_view(), name='seasonupdate-admin'),
    path('courses/mylesson/<int:id>/admin', admin_views.MyLessonAdminView.as_view(), name='mylesson-admin'),
    path('courses/lesson/update/<int:id>/admin', admin_views.LessonUpdateAdminView.as_view(), name='lessonupdate-admin'),

]

