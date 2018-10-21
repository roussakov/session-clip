import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-playback-progress-bar',
  templateUrl: './playback-progress-bar.component.html',
  styleUrls: ['./playback-progress-bar.component.css']
})
export class PlaybackProgressBarComponent {

  current: number = 0;

  constructor() {
  }

  @Input() set progress(progress) {
    if (progress) {
      progress.subscribe(t => this.current = t * 100);
    }
  }

  onProgressChangeHandler(value: number) {
    console.log(value / 100)
  }

}
