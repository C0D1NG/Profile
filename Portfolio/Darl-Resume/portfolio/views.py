from django.shortcuts import render
from .models import Contact
from django.http import HttpResponse

# Create your views here.

def index(request):
    if request.method=="POST":
        contact = Contact()
        name = request.POST.get('name')
        email = request.POST.get('email')
        comment = request.POST.get('comment')
        contact.name=name
        contact.email=email
        contact.comment=comment
        contact.save()
        return HttpResponse("<h6>Thanks for the comment, I will get back to you shortly</h6>")

    return render(request, 'home.html')
