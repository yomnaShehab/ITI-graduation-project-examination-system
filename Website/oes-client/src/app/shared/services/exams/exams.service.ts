import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {Observable} from "rxjs";
import {IExam, IExamAnswer, IExamResult} from "../../interfaces/exam.interface";

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  constructor(private httpService: HttpService) {
  }

  getExamDetailsById(examId: number): Observable<IExam[]> {
    return this.httpService.get(`exams/${examId}`);
  }

  getExamsList(): Observable<IExam[]> {
    return this.httpService.get(`exams`);
  }

  getStudentExamsList(studentId: number): Observable<IExam[]> {
    return this.httpService.get(`exams/stds/${studentId}`);
  }

  getExamsListByCourseId(courseId: number): Observable<IExam[]> {
    return this.httpService.get(`exams/crs/${courseId}`);
  }

  getStudentExamsByCourseId(studentId: number, courseId: number): Observable<IExam[]> {
    return this.httpService.get(`exams/stds/${studentId}/${courseId}`);
  }

  viewExamResult(examId: number, studentId: number): Observable<IExam[]> {
    return this.httpService.get(`exams/result/${examId}/${studentId}`);
  }

  submitExamAnswer(examAnswers: IExamAnswer[]): Observable<IExamResult> {
    return this.httpService.post(`exams/submit`, {
      answers: examAnswers
    });
  }
}
