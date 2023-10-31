import {Component, OnInit} from '@angular/core';
import {ExamsService} from "../../../../shared/services/exams/exams.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {IExam} from "../../../../shared/interfaces/exam.interface";
import {AuthService} from "../../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-student-exams-list',
  templateUrl: './student-exams-list.component.html',
  styleUrls: ['./student-exams-list.component.scss']
})

export class StudentExamsListComponent implements OnInit {
  examsList: IExam[] = [];
  examsGroupedByDate: { [date: string]: any } = {};
  isLoading: boolean = false;
  stdId: number = 0;

  constructor(private examsService: ExamsService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.stdId = this.authService.userInfo?.id || 0;
    this.route.params.subscribe(params => {
      const {id} = params;
      if (id) {
        this.isLoading = true;
        this.examsService.getStudentExamsList(id).subscribe({
          next: (examsList) => {
            this.examsList = examsList;
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.isLoading = false;
          }
        });
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  onViewExam(examId: number) {
    if (this.stdId) {
      this.router.navigate([`/exams/${examId}`]);
    }
  }
}
