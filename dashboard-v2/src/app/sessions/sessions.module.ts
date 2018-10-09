import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {SessionsRoutingModule} from "./sessions-routing.module";
import {SessionService} from "./services/session.service";
import { ViewSessionPageComponent } from './containers/view-session-page/view-session-page.component';
import {SessionsCollectionPageComponent} from "./containers/sessions-collection-page/sessions-collection-page.component";
import { SessionItemComponent } from './components/session-item/session-item.component';
import {RecordingsService} from "./services/recordings.service";
import {PlayerModule} from "../player/player.module";
import { DomBuilderPipe } from './pipes/dom-builder.pipe';
import {MaterialModule} from "../shared/material/material.module";

@NgModule({
  imports: [
    CommonModule,
    SessionsRoutingModule,
    PlayerModule,
    MaterialModule
  ],
  declarations: [
    SessionsCollectionPageComponent,
    ViewSessionPageComponent,
    SessionItemComponent,
    DomBuilderPipe
  ],
  providers: [
    SessionService,
    RecordingsService,
    DatePipe
  ]
})
export class SessionsModule { }
