import json
import os
import mimetypes
from django.shortcuts import render
from wsgiref.util import FileWrapper
from django.http import StreamingHttpResponse, HttpResponseNotFound, HttpResponse
import uuid


# Create your views here.
def homepage(request):
    return render(request, "index.html")


def download(request):
    if request.method == "POST":
        data = request.POST.get('name')
        print(data)
    return render(request, "index.html")
    #
    # user_id_token = str(uuid.uuid4())
    #
    # # 1 cоздаем путь к папке с файлами
    # path = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + f"\\static\\pic\\"
    # extension = "txt"
    # file_name = f"{user_id_token}.{extension}"
    #
    # # генерируется xml-файл с именем переданным в переменную user_id_token
    # with open(os.path.join(path, file_name), 'w') as fp:
    #     fp.write('any data')
    #
    # # проверяем если файл создался то скачиваем
    # if os.path.exists(path):
    #     path_and_filname = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + f"\\static\\pic\\{file_name}"
    #     response = StreamingHttpResponse(FileWrapper(open(path_and_filname, 'rb'), 8192),
    #                                      content_type=mimetypes.guess_type(path_and_filname)[0])
    #     response['Content-Length'] = os.path.getsize(path_and_filname)
    #     response['Content-Disposition'] = "Attachment;filename=%s" % os.path.basename(path_and_filname)
    #     return response
    # else:
    #     return HttpResponseNotFound(f"Файл отсутствует!!!")


# 100% рабочая схема скачивания файла только надо не забыть создать файл
# def download(request):
#     path_and_filname = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + f"\\static\\pic\\data.txt"
#     if os.path.exists(path_and_filname):
#         img = open(path_and_filname, 'rb')
#         response = FileResponse(img)
#         response['Content-Disposition'] = "Attachment;filename=data.txt" # % os.path.basename(path_and_filname)
#         return response
