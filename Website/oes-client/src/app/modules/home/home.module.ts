import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {CoursesListModule} from "../../shared/components/courses-list/courses-list.module";
import {SpinnerModule} from "primeng/spinner";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NavigationSidebarModule} from "../../shared/components/navigation-sidebar/navigation-sidebar.module";
import {LayoutContainerModule} from "../../shared/components/layout-container/layout-container.module";
import {DividerModule} from "primeng/divider";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AvatarModule,
    ButtonModule,
    CoursesListModule,
    SpinnerModule,
    ProgressSpinnerModule,
    NavigationSidebarModule,
    LayoutContainerModule,
    DividerModule
  ]
})
export class HomeModule {
}
