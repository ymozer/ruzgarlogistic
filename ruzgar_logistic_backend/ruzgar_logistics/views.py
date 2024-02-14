from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def homepage(request):
    # Static data to serve for now
    data = {
        "title": "Welcome to My Homepage",
        "body": "This is a sample body text for the homepage."
    }
    return Response(data)
