export interface IUser {
  id: number;
  email: string;
  password: string;
  role: USER_ROLES;
  Ins_id?: number;
  Ins_name?: string;
  Ins_email?: string;
  'Ins_phone '?: number;
  Ins_city?: string;
  Ins_gender?: string;
  Dept_id?: number;
  Std_City?: string;
  Std_age?: number;
  Std_email?: string;
  Std_faculty?: string;
  Std_gender?: string;
  Std_grad_year?: number;
  Std_name?: string;
  Std_phone?: number;

}

export enum USER_ROLES {
  STUDENT = 1,
  INSTRUCTOR,
  MANAGER
}
