import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  //load all category

  public loadAllCategory() {
    return this.http.get(`${baseUrl}/category/`);
  }

  //add category
  public addCategory(Category: any) {
    return this.http.post(`${baseUrl}/category/`, Category);
  }
}
