import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';
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

  quizData = {
    qid: 0,
    title: '',
    description: '',
    maxMarks: null,
    noOfQuestions: null,
    isActive: true,

    category: {
      cid: 0,
    },
  };
  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private quizService: QuizserviceService
  ) {}

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

  public addQuiz() {
    console.log(this.quizData);

    // Title
    if (
      this.quizData.title.trim() == null ||
      this.quizData.title.trim() == ''
    ) {
      this.snackBar.open('Title is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //Description
    if (
      this.quizData.description.trim() == null ||
      this.quizData.description.trim() == ''
    ) {
      this.snackBar.open('description is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    // maxmimum marks
    if (this.quizData.maxMarks == null) {
      this.snackBar.open('maximum marks is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //noOfQuestions
    if (this.quizData.noOfQuestions == null) {
      this.snackBar.open('noOfQuestions is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //noOfQuestions
    if (this.quizData.category.cid == null || this.quizData.category.cid == 0) {
      this.snackBar.open('Category is Required', 'error', {
        duration: 2000,
      });
      return;
    }
    this.quizService.addQuiz(this.quizData).subscribe(
      (data1: any) => {
        this.quizData = {
          qid: 0,
          title: '',
          description: '',
          maxMarks: null,
          noOfQuestions: null,
          isActive: true,

          category: {
            cid: 0,
          },
        };
        Swal.fire('ok', 'Quiz Added Successfulley', 'success');
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
  }
}
