from django.db import models

class Category(models.Model):
    id = models.AutoField(primary_key=True)  # Explicitly defining ID
    name = models.CharField(max_length=255, unique=True)  # Unique name field

    def __str__(self):
        return self.name
