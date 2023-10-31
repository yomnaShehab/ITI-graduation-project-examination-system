import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutContainerComponent} from './layout-container.component';
import {NavigationSidebarModule} from "../navigation-sidebar/navigation-sidebar.module";
import {ProgressSpinnerModule} from "primeng/progressspinner";


@NgModule({
  declarations: [
    LayoutContainerComponent
  ],
  exports: [
    LayoutContainerComponent
  ],
  imports: [
    CommonModule,
    NavigationSidebarModule,
    ProgressSpinnerModule
  ]
})
export class LayoutContainerModule {
}
