from django.urls import path, include
from rest_framework import routers
from .views import data

urlpatterns = [
    path('dataset/', data),
]
