import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentsService} from "../../shared/services/students/students.service";
import {AuthService} from "../../shared/services/auth/auth.service";
import {ICourse} from "../../shared/interfaces/course.interface";
import {IUser} from "../../shared/interfaces/user.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  coursesList: ICourse[] = [];
  userInfo?: IUser | null;

  constructor(private studentsService: StudentsService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userInfo = this.authService?.userInfo;
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/auth/login']);
    }
    if (this.userInfo) {
      this.isLoading = true;
      const {id} = this.userInfo;
      this.studentsService.getStudentCoursesById(id).subscribe({
        next: (courses) => {
          this.coursesList = courses;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

}
