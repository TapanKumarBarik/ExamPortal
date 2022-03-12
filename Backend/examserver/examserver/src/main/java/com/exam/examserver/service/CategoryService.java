package com.exam.examserver.service;

import com.exam.examserver.model.exam.Category;

import java.util.Set;

public interface CategoryService {
    public Category addCategory(Category category);

    public Category updateCategory(Category category);

    public Set<Category> getCategories();

    public Category getCategoryById(Long cid);
    public void deleteCategory(Long cid);
}
