from django.contrib import admin
from .models import Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  # Display ID and Name in Admin
    search_fields = ('name',)  # Enable search by name
    ordering = ('id',)  # Order by ID
