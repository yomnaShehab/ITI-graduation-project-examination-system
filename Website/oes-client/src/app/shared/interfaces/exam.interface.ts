export interface IExam extends IExamQuestion {
  Exam_id: number;
  Exam_date: string;
  Exam_duration: number;
  Exam_grade: number;
  No_of_qs: number;
  Crs_id: number;
  Grade?: number;
  Crs_name?: string;
  Crs_grade?: number;
}

export interface IExamDetails {
  Exam_id: number;
  Exam_date: string;
  Exam_duration: number;
  Exam_grade: number;
  No_of_qs: number;
  Crs_id: number;
  Crs_name: string;
  questions: IExamQuestion[];
}

export interface IExamQuestion {
  Quest_id?: number;
  Quest_txt?: string;
  Quest_type?: string;
  Quest_mark?: number;
  Model_ans_id?: number;
  Model_ans_txt?: string;
  choices: IQuestionChoice[];
  Std_id?: number;
  Std_qs_grade?: number;
  Std_ans_txt?: string;
}

export interface IQuestionChoice {
  Choice_id: number;
  Choice_txt: string;
  Is_correct: boolean;
  Quest_id?: number;

}

export interface IExamAnswer {
  examId: number;
  stdId: number;
  questId: number;
  answer: string;
  grade: number;
}

export interface IExamResult {
  Std_id: number;
  Exam_id: number;
  Grade: number;
}
