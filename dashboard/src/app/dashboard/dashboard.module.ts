import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SessionService} from "./session.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  providers: [SessionService],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
