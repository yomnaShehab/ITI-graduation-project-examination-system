import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEvaluationsComponent } from './course-evaluations.component';

describe('CourseEvaluationsComponent', () => {
  let component: CourseEvaluationsComponent;
  let fixture: ComponentFixture<CourseEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEvaluationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
