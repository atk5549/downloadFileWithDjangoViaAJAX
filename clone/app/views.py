import json
import os
from django.views import View
from django.http import HttpResponseNotFound, FileResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.shortcuts import render


# Create your views here.
def homepage(request):
    return render(request, "index.html")


@method_decorator(csrf_exempt, name='dispatch')
class AddFile(View):

    def post(self, request):
        data = json.loads(request.body.decode('utf-8'))
        print(data)

        # сохраняю данные в xml-файл по заданному пути
        path = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + f"\\static\\pic\\"
        with open(os.path.join(path, "data.xml"), 'w', encoding="utf-8") as fp:
            fp.write(str(data))

        return JsonResponse(data)


class DownloadFile(View):
    def get(self, request):
        path_and_filname = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + f"\\static\\pic\\data.xml"
        if os.path.exists(path_and_filname):
            myFileForRead = open(path_and_filname, 'rb')
            response = FileResponse(myFileForRead)
            response['Content-Type'] = "application/xml"
            response['Content-Length'] = os.path.getsize(path_and_filname)
            response['Content-Disposition'] = f"Attachment;filename={os.path.basename(path_and_filname)}"
            return response
        else:
            return HttpResponseNotFound(f"Файл отсутствует!!!")
