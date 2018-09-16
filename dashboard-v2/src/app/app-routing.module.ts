import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const appRoutes: Routes = [
  { path: '', redirectTo: '/sessions', pathMatch: 'full' },
  { path: 'sessions', loadChildren: './sessions/sessions.module#SessionsModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
    )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
