export interface ICourse {
  Crs_id: number;
  Crs_name: string;
  Crs_duration: number;
  Topic_name: string;
  Std_id?: number;
  Ins_id: number;
  Ins_email: string;
  Ins_name: string;
  Dept_name: string;
  Crs_grade?: number;
}

export interface ICourseEvaluation {
  Std_id: number;
  Crs_id: number;
  Crs_Material_helpful: number;
  Crs_Content: number;
  "Crs_well-organised": number;
  Inst_ClassTime: number;
  Inst_Responce_Qus: number;
  Inst_GiveClearEx: number;
}

export interface IEvaluation {
  courseMaterial: number;
  courseContent: number;
  courseWellOrganised: number;
  instClassTime: number;
  instResponseQus: number;
  instGiveClearEx: number;
}
