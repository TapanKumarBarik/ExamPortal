import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  qid = 0;
  questions:
    | [
        {
          questionid: '';
          option1: '';
          option2: '';
          option3: '';
          option4: '';
          answer: '';
          content: '';
          quiz: {
            active: boolean;
            description: '';
            maxMarks: 0;
            noOfQuestions: 0;
            qid: 0;
            title: '';
          };
        }
      ]
    | any;
  constructor(
    private route: ActivatedRoute,
    private locationStrategy: LocationStrategy,
    private quizService: QuizserviceService
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['quizId'];
    this.preventBackButton();
    this.loadAllQuestions(this.qid);
  }
  loadAllQuestions(qid: any) {
    this.quizService.getAllQuestionsOfAQuiz(this.qid).subscribe(
      (data1: any) => {
        this.questions = data1;
        console.log(this.questions);
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
  }
  // Define a function to handle back button and use anywhere
  preventBackButton() {
    history.pushState(null, 'null', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, 'null', location.href);
    });
  }
}
