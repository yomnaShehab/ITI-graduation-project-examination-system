import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {CoursesService} from "../../../../shared/services/courses/courses.service";
import {ICourse} from "../../../../shared/interfaces/course.interface";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails?: ICourse;
  isLoading: boolean = false;

  constructor(private coursesService: CoursesService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/auth/login']);
    }
    this.isLoading = true;
    this.route.params.subscribe({
      next: (params) => {
        const {id} = params;
        this.coursesService.getCourseDetailsById(id).subscribe({
          next: (course) => {
            this.courseDetails = course[0];
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.isLoading = false;
          }
        });
      }
    });
  }
}
