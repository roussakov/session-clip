import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

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

  getRecordingUrl() {
    const sessionId = window.sessionStorage.getItem("sessionClip.sessionId");
    const dashboardUrl = environment.dashboardUrl;
    return `${dashboardUrl}/sessions/${sessionId}`
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
