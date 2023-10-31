import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationSidebarComponent} from './navigation-sidebar.component';
import {AvatarModule} from "primeng/avatar";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    NavigationSidebarComponent
  ],
  exports: [
    NavigationSidebarComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    RouterLink
  ]
})
export class NavigationSidebarModule {
}
