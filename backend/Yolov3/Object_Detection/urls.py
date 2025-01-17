from django import urls
from django.conf import settings
from django.views.static import serve

from django.urls import path
from django.views.generic import RedirectView
from .views import detect_request, object_detection_api

# urlpatterns = [
#     path('object_detection/', detect_request),
#     path('', RedirectView.as_view(url='object_detection/')),
#     path('object_detection/api_request/', object_detection_api),
# ]

urlpatterns = [
    urls(r'object_detection/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
]