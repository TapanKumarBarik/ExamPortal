import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css'],
})
export class AddquestionComponent implements OnInit {
  qid = '';
  public Editor = ClassicEditor;
  qTitle = '';
  question = {
    content: '',
    image: 'java.png',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',

    quiz: {
      qid: '',
    },
  };
  constructor(
    private route: ActivatedRoute,
    private questionService: QuizserviceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.qTitle = this.route.snapshot.params['title'];

    this.question.quiz.qid = this.qid;
  }
  public submitForm() {
    // content
    if (
      this.question.content.trim() == '' ||
      this.question.content.trim().length == 0
    ) {
      this.snackBar.open('Content is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //option1
    if (
      this.question.option1.trim() == '' ||
      this.question.option1.trim().length == 0
    ) {
      this.snackBar.open('option1 is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //option2
    if (
      this.question.option2.trim() == '' ||
      this.question.option2.trim().length == 0
    ) {
      this.snackBar.open('option2 is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //option3
    if (
      this.question.option3.trim() == '' ||
      this.question.option3.trim().length == 0
    ) {
      this.snackBar.open('option3 is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //option4
    if (
      this.question.option4.trim() == '' ||
      this.question.option4.trim().length == 0
    ) {
      this.snackBar.open('option4 is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    //answer
    if (
      this.question.answer.trim() == '' ||
      this.question.answer.trim().length == 0
    ) {
      this.snackBar.open('answer is Required', 'error', {
        duration: 2000,
      });
      return;
    }

    this.questionService.postQuestion(this.question).subscribe(
      (data1: any) => {
        Swal.fire('ok', 'Added Successfully', 'success');
        Swal.fire('ok', 'Quiz Updated Successfulley', 'success');
        this.router.navigate([
          '/admin-dashboard/view-question/' + this.qid + '/' + this.qTitle,
        ]);
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
  }
}
