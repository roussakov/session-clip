import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SessionsCollectionPageComponent} from "./containers/sessions-collection-page/sessions-collection-page.component";
import {ViewSessionPageComponent} from "./containers/view-session-page/view-session-page.component";

export const routes: Routes = [
  {path: ':id', component: ViewSessionPageComponent},
  {path: '', component: SessionsCollectionPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsRoutingModule {
}
