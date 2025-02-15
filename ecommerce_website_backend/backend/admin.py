from django.contrib import admin
from .models import Category, SubCategory, Brand

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
    ordering = ('id',)

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category')
    search_fields = ('name', 'category__name')  # Search by subcategory or category name
    list_filter = ('category',)  # Filter by category
    ordering = ('id',)

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'photo')
    search_fields = ('name',)
    ordering = ('id',)
