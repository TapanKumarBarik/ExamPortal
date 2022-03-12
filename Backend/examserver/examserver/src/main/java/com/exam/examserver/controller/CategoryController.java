package com.exam.examserver.controller;


import com.exam.examserver.model.exam.Category;
import com.exam.examserver.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
@Autowired
private CategoryService categoryService;


//Add Category
    @PostMapping("/")
    public ResponseEntity<?>addCategory(@RequestBody Category category){

        Category category1=this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);

    }

    //Get category
    @GetMapping("/{categoryId}")
    public Category getCategory(@PathVariable("categoryId") Long cid){
        return this.categoryService.getCategoryById(cid);
    }

    //Get all categories
    @GetMapping("/")
    public ResponseEntity<?>getAllCategory(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    //Update category
    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }

    //Delete Category
    @DeleteMapping("/{cid}")
    public void deleteCategory(@PathVariable ("cid") Long cid){
        this.categoryService.deleteCategory(cid);
    }
}
