import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesListComponent} from './courses-list.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    CoursesListComponent
  ],
  exports: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterLink
  ]
})
export class CoursesListModule {
}
