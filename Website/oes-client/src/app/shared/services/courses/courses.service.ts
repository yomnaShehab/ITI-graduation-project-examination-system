import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {Observable} from "rxjs";
import {ICourse, ICourseEvaluation, IEvaluation} from "../../interfaces/course.interface";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpService: HttpService) {
  }

  getCourseDetailsById(courseId: string): Observable<ICourse[]> {
    return this.httpService.get(`courses/${courseId}`);
  }

  getCoursesEvaluationsByStdId(stdId: number): Observable<ICourseEvaluation[]> {
    return this.httpService.get(`courses/evaluations/${stdId}`);
  }

  addCourseEvaluation(courseEvaluation: { stdId: number; courseId: number; evaluation: IEvaluation }): Observable<ICourseEvaluation[]> {
    return this.httpService.post(`courses/evaluate`, courseEvaluation);
  }
}
