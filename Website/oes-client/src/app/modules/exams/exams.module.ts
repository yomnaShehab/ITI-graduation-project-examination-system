import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExamsRoutingModule} from './exams-routing.module';
import {ExamDetailsComponent} from './pages/exam-details/exam-details.component';
import {ExamsListComponent} from './pages/exams-list/exams-list.component';
import {StudentExamsListComponent} from './pages/student-exams-list/student-exams-list.component';
import {LayoutContainerModule} from "../../shared/components/layout-container/layout-container.module";
import {TableModule} from "primeng/table";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";


@NgModule({
  declarations: [
    ExamDetailsComponent,
    ExamsListComponent,
    StudentExamsListComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule,
    LayoutContainerModule,
    TableModule,
    DividerModule,
    ButtonModule,
    RadioButtonModule,
    ReactiveFormsModule,
    FormsModule,
    TagModule
  ]
})
export class ExamsModule {
}
