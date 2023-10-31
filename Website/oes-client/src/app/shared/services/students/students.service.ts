import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {Observable} from "rxjs";
import {ICourse} from "../../interfaces/course.interface";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpService: HttpService) {
  }

  getStudentCoursesById(stdId: number): Observable<ICourse[]> {
    return this.httpService.get(`courses/stds/${stdId}`);
  }
}
