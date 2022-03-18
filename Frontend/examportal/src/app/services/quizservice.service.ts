import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuizserviceService {
  constructor(private http: HttpClient) {}

  public getAllQuiz() {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz: any) {
    return this.http.post(`${baseUrl}/quiz/`, quiz);
  }
}