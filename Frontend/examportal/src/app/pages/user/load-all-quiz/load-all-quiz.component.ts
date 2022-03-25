import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-all-quiz',
  templateUrl: './load-all-quiz.component.html',
  styleUrls: ['./load-all-quiz.component.css'],
})
export class LoadAllQuizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private quizService: QuizserviceService
  ) {}
  quizId = 0;
  quizzes = [
    {
      qid: 0,
      title: '',
      description: '',
      maxMarks: 50,
      noOfQuestion: 20,
      active: true,
      category: {
        title: 'Programming',
      },
    },
  ];
  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId'];

    this.route.params.subscribe((params: any) => {
      if (params.quizId == 0) {
        this.quizService.getAllQuiz().subscribe(
          (data1: any) => {
            this.quizzes = data1.filter((e: any) => e.active == true);
          },
          (error1: any) => {
            console.error(error1);
            Swal.fire('error', 'Something Wrong Happened', 'error');
            return;
          }
        );
      } else {
        this.quizService.getAllQuiz().subscribe(
          (data1: any) => {
            console.log(data1);

            this.quizzes = data1.filter(
              (e: any) => e.category.cid == params.quizId && e.active == true
            );
          },
          (error1: any) => {
            console.error(error1);
            Swal.fire('error', 'Something Wrong Happened', 'error');
            return;
          }
        );
      }
    });
    //
    //
  }
}
