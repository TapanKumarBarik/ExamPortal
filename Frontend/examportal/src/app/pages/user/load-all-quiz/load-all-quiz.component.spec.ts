import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAllQuizComponent } from './load-all-quiz.component';

describe('LoadAllQuizComponent', () => {
  let component: LoadAllQuizComponent;
  let fixture: ComponentFixture<LoadAllQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAllQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAllQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
