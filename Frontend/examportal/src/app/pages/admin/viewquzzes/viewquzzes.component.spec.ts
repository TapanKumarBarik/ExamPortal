import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquzzesComponent } from './viewquzzes.component';

describe('ViewquzzesComponent', () => {
  let component: ViewquzzesComponent;
  let fixture: ComponentFixture<ViewquzzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewquzzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewquzzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
