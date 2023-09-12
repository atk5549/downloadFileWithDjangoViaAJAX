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
    """
    Возьмите во внимание что вернуть ответ в виде файла из POST запроса, в этом же классе не получится,
    необходимо создавать новый контроллер

    """
    def post(self, request):

        # take json data from post query...
        data = json.loads(request.body.decode('utf-8'))

        request.session['curentfilenamekey'] = str(data['curentfilename'])

        # save data to xml file
        path = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + f"\\static\\pic\\"
        with open(os.path.join(path, str(data['curentfilename']) + '.xml'), 'w', encoding="utf-8") as fp:
            fp.write(str(data))

        # send json response to front
        return JsonResponse(data)


class DownloadFile(View):
    def get(self, request):
        path_and_filname = os.path.dirname(os.path.dirname(
            os.path.abspath(__file__))) + f"\\static\\pic\\{str(request.session['curentfilenamekey'])}.xml"

        if os.path.exists(path_and_filname):
            myFileForRead = open(path_and_filname, 'rb')
            response = FileResponse(myFileForRead)
            response['Content-Type'] = "application/xml"
            response['Content-Length'] = os.path.getsize(path_and_filname)
            response['Content-Disposition'] = f"Attachment;filename={os.path.basename(path_and_filname)}"
            return response
        else:
            return HttpResponseNotFound("File not founded...")
