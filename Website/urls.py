from django.urls import path
from . import views

# Here goes the app views urls
urlpatterns = [
    path('', views.index , name='index')
]