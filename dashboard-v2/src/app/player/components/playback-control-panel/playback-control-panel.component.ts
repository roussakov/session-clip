import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-playback-control-panel',
  templateUrl: './playback-control-panel.component.html',
  styleUrls: ['./playback-control-panel.component.css']
})
export class PlaybackControlPanelComponent {

  @Output() onPlayClick = new EventEmitter();
  @Output() onStopClick = new EventEmitter();
  @Output() onPauseClick = new EventEmitter();

  playing: boolean = false;
  completed: boolean = false;

  playHandler() {
    this.playing = true;
    this.onPlayClick.emit();
  }

  stopHandler() {
    this.playing = false;
    this.onStopClick.emit();
  }

}
