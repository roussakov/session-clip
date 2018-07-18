import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayerComponent} from './player.component';
import {MaterialModule} from "../shared/material/material.module";
import {RecordingsService} from "./services/recordings.service";
import {EffectsModule} from "@ngrx/effects";
import {FetchPlayerRecordingsEffectService} from "./store/effects/fetch-player-recordings-effect.service";
import {StoreModule} from "@ngrx/store";
import {PlaybackControlComponent} from './components/playback-control/playback-control.component';
import {PlaybackContainerComponent} from './components/playback-container/playback-container.component';
import {storeReducer} from "./store/reducers/player-state.reducer";
import {PlayerRoutingModule} from "./player-routing.module";
import {InitialNodesResolver} from "./resolvers/initial-nodes.resolver";
import {InitialNodesService} from "./services/initial-nodes.service";


@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule,
    StoreModule.forFeature("player", storeReducer),
    EffectsModule.forFeature([FetchPlayerRecordingsEffectService]),
  ],
  exports: [
    PlayerComponent
  ],


  providers: [
    InitialNodesService,
    RecordingsService,
    InitialNodesResolver,
  ],
  declarations: [PlayerComponent, PlaybackControlComponent, PlaybackContainerComponent]
})
export class PlayerModule {
}
