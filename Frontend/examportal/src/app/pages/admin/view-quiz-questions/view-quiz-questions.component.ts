import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  qid = '';
  title = '';
  questions: [] | any;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizserviceService
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.title = this.route.snapshot.params['title'];

    // alert(this.title);

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
}
