import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ICourse, ICourseEvaluation, IEvaluation} from "../../../../shared/interfaces/course.interface";
import {CoursesService} from "../../../../shared/services/courses/courses.service";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {StudentsService} from "../../../../shared/services/students/students.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-course-evaluations',
  templateUrl: './course-evaluations.component.html',
  styleUrls: ['./course-evaluations.component.scss']
})
export class CourseEvaluationsComponent implements OnInit {

  courseEvaluationFactors = [
    {
      id: 1,
      name: 'Course Content',
    },
    {
      id: 2,
      name: 'Course Material Helpful',
    },
    {
      id: 3,
      name: 'Course Well Organized',
    },
    {
      id: 4,
      name: 'Instructor Class Time',
    },
    {
      id: 5,
      name: 'Instructor Response to Questions',
    },
    {
      id: 6,
      name: 'Instructor gives clear examples',
    }

  ]
  evaluationOptions = [1, 2, 3, 4, 5];

  courseEvaluationForm!: FormGroup;
  selectedCourseIdControl: FormControl = new FormControl(0, Validators.required);
  studentCoursesList: ICourse[] = [];
  isLoading: boolean = false;
  userId: number = 0;
  coursesEvaluations: ICourseEvaluation[] = [];

  constructor(private fb: FormBuilder,
              private studentsService: StudentsService,
              private coursesService: CoursesService,
              private authService: AuthService) {
  }

  initEvaluationForm(): void {
    this.courseEvaluationForm = this.fb.group({});
    this.courseEvaluationFactors.forEach((factor) => {
      const factorControl = new FormControl('', Validators.required);
      this.courseEvaluationForm.addControl(`factor_${factor.id}`, factorControl);
    });
  }

  ngOnInit(): void {
    const {userInfo} = this.authService;
    if (userInfo) {
      this.userId = userInfo.id;
      this.isLoading = true;
      const getAllCourses$ = this.studentsService.getStudentCoursesById(this.userId);
      const getAllCoursesEvaluations$ = this.coursesService.getCoursesEvaluationsByStdId(userInfo.id);
      forkJoin([getAllCourses$, getAllCoursesEvaluations$]).subscribe(
        {
          next: ([coursesList, coursesEvaluated]) => {
            this.coursesEvaluations = coursesEvaluated;
            this.updateCoursesDropDownList(coursesList);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.isLoading = false;
          }
        }
      );
    }
  }

  updateCoursesDropDownList(coursesList: ICourse[]): void {
    coursesList.filter((course) => {
      if (!this.coursesEvaluations
        .some((courseEvaluated) => courseEvaluated.Crs_id === course.Crs_id)) {
        this.studentCoursesList.push(course);
      }
    })
  }

  submitEvaluation() {
    this.courseEvaluationForm.markAllAsTouched();
    if (this.courseEvaluationForm.valid && this.userId && this.selectedCourseIdControl.value) {
      const evaluation: IEvaluation = {
        courseContent: this.courseEvaluationForm.get('factor_1')?.value,
        courseMaterial: this.courseEvaluationForm.get('factor_2')?.value,
        courseWellOrganised: this.courseEvaluationForm.get('factor_3')?.value,
        instClassTime: this.courseEvaluationForm.get('factor_4')?.value,
        instResponseQus: this.courseEvaluationForm.get('factor_5')?.value,
        instGiveClearEx: this.courseEvaluationForm.get('factor_6')?.value,
      };
      this.isLoading = true;
      this.coursesService.addCourseEvaluation({
        courseId: this.selectedCourseIdControl.value,
        stdId: this.userId,
        evaluation
      }).subscribe({
        next: (coursesEvaluated) => {
          this.coursesEvaluations = coursesEvaluated;
          let coursesList = this.studentCoursesList;
          this.studentCoursesList = [];
          this.selectedCourseIdControl.reset();
          this.courseEvaluationForm.reset();
          this.updateCoursesDropDownList(coursesList);
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      })
    }
  }
}
