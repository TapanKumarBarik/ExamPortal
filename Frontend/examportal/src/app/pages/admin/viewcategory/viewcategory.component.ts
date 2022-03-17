import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css'],
})
export class ViewcategoryComponent implements OnInit {
  categories = [
    {
      cid: 1,
      title: '',
      description: '',
    },
  ];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.loadAllCategory().subscribe(
      (data: any) => {
        console.log(data);
        this.categories = data;
        //call the get user details method end
      },
      (error: any) => {
        console.error(error);
        Swal.fire('error', 'Something Wrong Happened,error');
        return;
      }
    );
  }
}
