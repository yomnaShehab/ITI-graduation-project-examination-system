import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {CourseDetailsComponent} from './pages/course-details/course-details.component';
import {LayoutContainerModule} from "../../shared/components/layout-container/layout-container.module";
import {DividerModule} from "primeng/divider";
import {AvatarModule} from "primeng/avatar";
import {CoursesGradesComponent} from './pages/courses-grades/courses-grades.component';
import {TableModule} from "primeng/table";
import {CourseEvaluationsComponent} from './pages/course-evaluations/course-evaluations.component';
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    CourseDetailsComponent,
    CoursesGradesComponent,
    CourseEvaluationsComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    LayoutContainerModule,
    DividerModule,
    AvatarModule,
    TableModule,
    DropdownModule,
    RadioButtonModule,
    ReactiveFormsModule,
    ButtonModule,
  ]
})
export class CoursesModule {
}
