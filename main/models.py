from django.db import models
import string
import random 

# CREATE MODELS HERE

def generate_code(): 
    length = 8
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

class Event(models.Model):
    name = models.CharField(max_length=500, blank=False, null=True); 
    channel = models.CharField(max_length=500, blank=False, null=True); 
    game = models.CharField(max_length=100, blank=False, null=True); 
    game_image = models.ImageField(upload_to="images")
    info = models.TextField()

    def __str__(self):
        return self.name

class Room(models.Model):
    host = models.CharField(max_length=200, blank=False, null=True)
    code = models.CharField(max_length=8, unique=True, default=generate_code)
    created_at = models.DateTimeField(auto_now_add=True)
    channel = models.CharField(max_length=100, blank=False, null=True)

    def __str__(self):
        return self.code