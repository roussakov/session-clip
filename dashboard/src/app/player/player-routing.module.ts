import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PlayerComponent } from "./player.component";
import {InitialNodesResolver} from "./resolvers/initial-nodes.resolver";

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    resolve: [InitialNodesResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
