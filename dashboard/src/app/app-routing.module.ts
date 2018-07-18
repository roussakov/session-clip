import { NgModule } from '@angular/core';
import { PlayerComponent } from "./player/player.component";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";


const appRoutes: Routes = [
  { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'player/:sessionId', loadChildren: 'app/player/player.module#PlayerModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
