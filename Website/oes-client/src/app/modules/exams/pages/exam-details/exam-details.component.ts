import {Component, OnDestroy, OnInit} from '@angular/core';
import {ExamsService} from "../../../../shared/services/exams/exams.service";
import {ActivatedRoute, Router} from "@angular/router";
import {
  IExamAnswer,
  IExamDetails,
  IExamQuestion, IExamResult,
  IQuestionChoice
} from "../../../../shared/interfaces/exam.interface";
import {AuthService} from "../../../../shared/services/auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {interval, Subscription, takeWhile} from "rxjs";

enum VIEWS {
  EXAM = 1,
  RESULT = 2
}

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.scss']
})
export class ExamDetailsComponent implements OnInit, OnDestroy {
  examDetails?: IExamDetails;
  isLoading: boolean = false;
  examResult?: IExamResult;
  examFormGroup!: FormGroup;
  remainingTime: string = '';
  timerSub?: Subscription;
  currentView: VIEWS = VIEWS.EXAM;
  userId?: number;
  subscriptions: Subscription[] = [];

  constructor(private examsService: ExamsService,
              private authService: AuthService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub) => sub.unsubscribe());
  }

  initExamForm(): void {
    this.examFormGroup = this.fb.group({});
    this.examDetails?.questions.forEach((question: IExamQuestion) => {
      const questionControl = new FormControl('', Validators.required);
      this.examFormGroup.addControl(`question_${question.Quest_id}`, questionControl);
    });
    this.startExamTimer();
  }

  ngOnInit(): void {
    let routeSub = this.route.params.subscribe(params => {
      const {id} = params;
      const {userInfo} = this.authService;
      if (id && userInfo) {
        this.userId = userInfo?.id;
        this.isLoading = true;
        this.examsService.getExamDetailsById(id)
          .subscribe({
            next: (exam) => {
              this.examDetails = this.getResultOfExam(exam, id);
              this.initExamForm();
            },
            error: (error) => {
              console.log(error);
              this.router.navigate(['/exams']);
            },
            complete: () => {
              this.isLoading = false;
            }
          })
      }

    });
    this.subscriptions.push(routeSub);
  }

  getResultOfExam(results: any[], id: number): IExamDetails {
    const examResult: { [key: number]: IExamDetails } = {};

    for (const result of results) {
      const examId = result.Exam_id;
      if (!examResult[examId]) {
        examResult[examId] = {
          Exam_id: examId,
          Exam_date: result.Exam_date,
          Exam_duration: result.Exam_duration,
          Exam_grade: result.Exam_grade,
          No_of_qs: result.No_of_qs,
          Crs_id: result.Crs_id,
          Crs_name: result.Crs_name,
          questions: [],
        };
      }

      const question: IExamQuestion = {
        Quest_id: result.Quest_id,
        Quest_txt: result.Quest_txt,
        Quest_type: result.Quest_type,
        Quest_mark: result.Quest_mark,
        Model_ans_id: result.Model_ans_id,
        Model_ans_txt: result.Model_ans_txt,
        choices: [],
      };

      const choice: IQuestionChoice = {
        Choice_id: result.Choice_id,
        Choice_txt: result.Choice_txt,
        Is_correct: result.Is_correct,
      };

      const examDetails = examResult[examId];
      const existingQuestion = examDetails.questions.find(
        (q) => q.Quest_id === question.Quest_id
      );

      if (existingQuestion) {
        existingQuestion.choices.push({
          ...choice,
          Quest_id: existingQuestion.Quest_id,
        });
      } else {
        question.choices.push({
          ...choice,
          Quest_id: question.Quest_id,
        });
        examDetails.questions.push(question);
      }
    }
    return Object.values(examResult)[0];
  }

  startExamTimer() {
    if (this.examDetails) {
      const examDurationInMinutes = this.examDetails.Exam_duration; // Exam duration in minutes
      let examDurationInSeconds = examDurationInMinutes * 60; // Convert to seconds
      this.remainingTime = this.formatTime(examDurationInSeconds);

      this.timerSub = interval(1000)
        .pipe(
          takeWhile(() => examDurationInSeconds > 0)
        )
        .subscribe(() => {
          examDurationInSeconds--;

          this.remainingTime = this.formatTime(examDurationInSeconds);

          if (examDurationInSeconds <= 0) {
            // Timer has expired, submit the exam form or handle it as needed
            this.submit();
          }
        });
      this.subscriptions.push(this.timerSub);
    }
  }

  formatTime(timeInSeconds: number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  stopExamTimer() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

  submit() {
    this.stopExamTimer();
    this.examFormGroup.markAllAsTouched();
    if (this.examFormGroup.valid) {
      this.isLoading = true;
      if (this.userId && this.examDetails) {
        let answers: IExamAnswer[] = [];
        Object.keys(this.examFormGroup.value).forEach((key) => {
          const questId = key.split('_')[1];
          if (this.userId) {
            const answer: IExamAnswer = {
              questId: Number(questId),
              examId: Number(this.examDetails?.Exam_id),
              stdId: this.userId,
              answer: this.examFormGroup.value[key],
              grade: this.examDetails?.questions.find((quest) => quest?.Quest_id == Number(questId))?.Model_ans_txt === this.examFormGroup.value[key] ? 5 : 0
            }
            answers.push(answer);
          }
        });
        this.examsService.submitExamAnswer(answers).subscribe({
          next: (result) => {
            this.examResult = result;
            this.currentView = VIEWS.RESULT;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            this.isLoading = false;
          }
        })
      }
    }
  }
}
