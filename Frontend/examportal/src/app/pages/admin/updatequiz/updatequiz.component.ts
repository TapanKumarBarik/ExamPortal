import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatequiz',
  templateUrl: './updatequiz.component.html',
  styleUrls: ['./updatequiz.component.css'],
})
export class UpdatequizComponent implements OnInit {
  qid = 0;
  quizData = {
    qid: 0,
    title: '',
    description: '',
    maxMarks: null,
    noOfQuestions: null,
    active: true,

    category: {
      cid: 0,
    },
  };
  categories = [
    {
      cid: 1,
      title: 'Programming',
    },
  ];
  constructor(
    private _route: ActivatedRoute,
    private quizService: QuizserviceService,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this.quizData.qid = this.qid;

    this.quizService.getSingleQuiz(this.qid).subscribe(
      (data1: any) => {
        this.quizData = data1;
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
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

  public UpdateQuiz() {
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
        Swal.fire('ok', 'Quiz Updated Successfulley', 'success');
        this.route.navigate(['/admin-dashboard/quizzes/']);
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
  }
}
