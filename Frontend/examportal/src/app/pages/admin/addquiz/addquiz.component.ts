import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css'],
})
export class AddquizComponent implements OnInit {
  categories = [
    {
      cid: 1,
      title: 'Programming',
    },
  ];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.loadAllCategory().subscribe(
      (data1: any) => {
        this.categories = data1;
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
  }
}
