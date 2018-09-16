import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybackControlPanelComponent } from './components/playback-control-panel/playback-control-panel.component';
import {MaterialModule} from "../shared/material/material.module";
import { PlayerContainerComponent } from './containers/player-container/player-container.component';
import { PlaybackContainerComponent } from './components/playback-container/playback-container.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PlayerContainerComponent
  ],
  declarations: [PlaybackControlPanelComponent, PlayerContainerComponent, PlaybackContainerComponent],
  providers: []
})
export class PlayerModule { }
