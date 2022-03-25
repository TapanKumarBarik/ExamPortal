import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
})
export class UserSidebarComponent implements OnInit {
  constructor(private categoryServive: CategoryService) {}
  category = [{ title: '' }];
  ngOnInit(): void {
    this.categoryServive.loadAllCategory().subscribe(
      (data1: any) => {
        this.category = data1;
        console.log(this.category);
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
  }
}
