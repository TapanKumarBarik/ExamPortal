import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private quizService: QuizserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['quizId'];

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

  public startQuiz() {
    Swal.fire({
      icon: 'warning',
      title: 'are you sure to start the quiz?',
      confirmButtonText: 'start',
      showLoaderOnConfirm: true,
      showDenyButton: true,
      showLoaderOnDeny: true,
      showConfirmButton: true,
      showCloseButton: true,
      showCancelButton: true,
      denyButtonText: "Don't Start",
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/start/' + this.qid]);
      }
    });
  }
}
