import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamDetailsComponent} from "./pages/exam-details/exam-details.component";
import {ExamsListComponent} from "./pages/exams-list/exams-list.component";
import {StudentExamsListComponent} from "./pages/student-exams-list/student-exams-list.component";

const routes: Routes = [
  {
    path: ':id',
    pathMatch: "full",
    component: ExamDetailsComponent
  },
  {
    path: 'student/:id',
    component: StudentExamsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule {
}
