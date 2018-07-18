import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-playback-control',
  templateUrl: './playback-control.component.html',
  styleUrls: ['./playback-control.component.css']
})
export class PlaybackControlComponent implements OnInit {

  private playing: boolean = false;

  @Input() progress: number = 0;
  @Input() completed: boolean = false;
  @Output() onPlayingStateChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  togglePlayer() {
    if(this.completed) {
      this.completed = false;
      this.playing = true;
    } else {
      this.playing = !this.playing;
    }

    this.onPlayingStateChange.emit(this.playing);
  }

}
