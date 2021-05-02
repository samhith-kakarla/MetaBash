from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Event, Room
from .serializers import EventSerializer, RoomSerializer, CreateRoomSerializer

# CREATE VIEWS HERE

@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def getRooms(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def joinRoom(request, code):
    room = Room.objects.get(code=code)
    serializer = RoomSerializer(room)

    return Response(serializer.data)

@api_view(['POST'])
def createRoom(request):
    room = request.data 
    serializer = CreateRoomSerializer(data=room)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(data={ 'Fail': 'Room was not created' })


        