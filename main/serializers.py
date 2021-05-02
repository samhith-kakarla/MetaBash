from rest_framework import serializers
from .models import Room, Event

# CREATE SERIALIZERS HERE

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name', 'game', 'game_image', 'channel', 'info')

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'host', 'channel', 'code', 'created_at')

class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'host', 'channel', 'code', 'created_at')