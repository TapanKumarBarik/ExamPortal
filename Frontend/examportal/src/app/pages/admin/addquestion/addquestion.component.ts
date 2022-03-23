import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css'],
})
export class AddquestionComponent implements OnInit {
  qid = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
  }
}
