
from django.urls import path
from . import views
from .views import AddFile, DownloadFile, deleteDownloadedFile

urlpatterns = [
    path('', views.homepage, name="index"),
    path('addfile/', AddFile.as_view(), name="addfile"),
    path('downloadfinalfile/', DownloadFile.as_view(), name="downloadfinalfile"),
    path('deletefinalfile/', deleteDownloadedFile, name="deletefinalfile"),
]
