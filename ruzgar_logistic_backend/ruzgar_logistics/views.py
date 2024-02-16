from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def homepage(request):
    # Static data to serve for now
    data = {
        "title": "Rüzgar Logistics",
        "body": "Welcome to Rüzgar Logistics!"
    }
    return Response(data)
