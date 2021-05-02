from django.urls import path
from . import views 

urlpatterns = [
    path('events/', views.getEvents, name="Events"), 
    path('rooms/', views.getRooms, name="Rooms"), 
    path('join/<str:code>/', views.joinRoom, name="Join Room"), 
    path('create/', views.createRoom, name="Create Room"), 
]