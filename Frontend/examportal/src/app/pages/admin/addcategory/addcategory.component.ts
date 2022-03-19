import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css'],
})
export class AddcategoryComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };

  constructor(
    private categoryService: CategoryService,
    private snackbar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit(): void {}

  public formSubmit() {
    if (
      this.category.title.trim() == ' ' ||
      this.category.description.trim() == ''
    ) {
      this.snackbar.open('title and description is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    //call the get user details method
    this.categoryService.addCategory(this.category).subscribe(
      (data1: any) => {
        this.category.description = '';
        this.category.title = '';
        Swal.fire('Success', 'Category added successfully', 'success');
        this.route.navigate(['/admin-dashboard/category/']);
      },
      (error1: any) => {
        Swal.fire('Error', 'Something went wrong', 'error');
        console.error(error1);
        return;
      }
    );
  }
}
