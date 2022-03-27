import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
})
export class InstructionsComponent implements OnInit {
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
        }
      ]
    | any;

  quizData = {
    qid: 0,
    title: '',
    description: '',
    maxMarks: 0,
    noOfQuestions: 0,
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
    private route: ActivatedRoute,
    private quizService: QuizserviceService
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['quizId'];

    // this.quizService.getAllQuestionsOfAQuiz(this.qid).subscribe(
    //   (data1: any) => {
    //     this.questions = data1;
    //     console.log(this.questions);
    //   },
    //   (error1: any) => {
    //     console.error(error1);
    //     Swal.fire('error', 'Something Wrong Happened', 'error');
    //     return;
    //   }
    // );

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
  }
}
