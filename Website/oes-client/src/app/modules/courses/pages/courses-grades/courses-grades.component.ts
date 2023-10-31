import {Component, OnInit} from '@angular/core';
import {ICourse} from "../../../../shared/interfaces/course.interface";
import {StudentsService} from "../../../../shared/services/students/students.service";
import {AuthService} from "../../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-courses-grades',
  templateUrl: './courses-grades.component.html',
  styleUrls: ['./courses-grades.component.scss']
})
export class CoursesGradesComponent implements OnInit {
  coursesGradesList: ICourse[] = [];
  isLoading: boolean = false;
  cols!: {
    field: string;
    header: string;
  }[];

  constructor(private studentsService: StudentsService,
              private authService: AuthService) {
  }

  ngOnInit() {
    const {userInfo} = this.authService;
    if (userInfo) {
      this.isLoading = true;
      this.studentsService.getStudentCoursesById(userInfo.id).subscribe({
        next: (courses) => {
          this.coursesGradesList = courses;
          this.cols = [
            {field: 'Crs_name', header: 'Course Name'},
            {field: 'Exam_date', header: 'Exam Date'},
            {field: 'Crs_grade', header: 'Course Grade'},
            {field: 'Grade', header: 'Student Grade'}
          ];
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.isLoading = false;
        }
      })
    }

  }

}
