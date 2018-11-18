import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.scss']
})
export class RecorderComponent implements OnInit {
  counter = 20;
  interval = 1000;

  recording = false;
  recordingEnd = false;


  constructor() { }

  ngOnInit() {
  }

  onCompletedHandler() {
    window["sessionClip"].stop();
    this.recording = false;
    this.recordingEnd = true;
  }

  startRecord() {
    window["sessionClip"].start();
    this.recording = true;
  }

}
