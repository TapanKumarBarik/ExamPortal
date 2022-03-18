import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from 'src/app/services/quizservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquzzes',
  templateUrl: './viewquzzes.component.html',
  styleUrls: ['./viewquzzes.component.css'],
})
export class ViewquzzesComponent implements OnInit {
  quizzes = [
    {
      qid: 1,
      title: 'Basic Java',
      description: 'desc',
      maxMarks: 50,
      noOfQuestion: 20,
      active: true,
      category: {
        title: 'Programming',
      },
    },
  ];
  constructor(private quizService: QuizserviceService) {}

  ngOnInit(): void {
    //call the get user details method
    this.quizService.getAllQuiz().subscribe(
      (data1: any) => {
        this.quizzes = data1;
      },
      (error1: any) => {
        console.error(error1);
        Swal.fire('error', 'Something Wrong Happened', 'error');
        return;
      }
    );
  }
}
