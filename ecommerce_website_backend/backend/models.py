from django.db import models

class Category(models.Model):
    id = models.AutoField(primary_key=True)  # Explicit ID field
    name = models.CharField(max_length=255, unique=True)  # Category name

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    id = models.AutoField(primary_key=True)  # Explicit ID field
    name = models.CharField(max_length=255, unique=True)  # Subcategory name
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')

    def __str__(self):
        return f"{self.name} ({self.category.name})"
