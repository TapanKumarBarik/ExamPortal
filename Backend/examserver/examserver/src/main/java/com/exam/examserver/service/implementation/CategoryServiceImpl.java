package com.exam.examserver.service.implementation;

import com.exam.examserver.Repo.CategoryRepository;
import com.exam.examserver.model.exam.Category;
import com.exam.examserver.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(this.categoryRepository.findAll());
    }


    //po er
    @Override
    public Category getCategoryById(Long cid) {
        return this.categoryRepository.findById(cid).get();
        //return this.categoryRepository.getById(cid);
    }

    @Override
    public void deleteCategory(Long cid) {
        Category category=new Category();
        category.setCid(cid);
        this.categoryRepository.delete(category);
        //this.categoryRepository.deleteById(cid);
    }
}
