import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamsListComponent } from './student-exams-list.component';

describe('StudentExamsListComponent', () => {
  let component: StudentExamsListComponent;
  let fixture: ComponentFixture<StudentExamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExamsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentExamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
