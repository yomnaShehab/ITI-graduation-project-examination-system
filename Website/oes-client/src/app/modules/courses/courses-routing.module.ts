import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseDetailsComponent} from "./pages/course-details/course-details.component";
import {CoursesGradesComponent} from "./pages/courses-grades/courses-grades.component";
import {CourseEvaluationsComponent} from "./pages/course-evaluations/course-evaluations.component";

const routes: Routes = [
  {
    path: 'grades',
    pathMatch: "full",
    component: CoursesGradesComponent
  },
  {
    path: 'evaluate',
    pathMatch: "full",
    component: CourseEvaluationsComponent
  },
  {
    path: ':id',
    pathMatch: "full",
    component: CourseDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
