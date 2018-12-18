import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.component.html',
  styleUrls: ['./recorder.component.scss']
})
export class RecorderComponent {
  counter = 20;
  interval = 1000;
  recording = false;

  @ViewChild("startModal") startModal;
  @ViewChild("stopModal") stopModal;

  constructor() { }

  ngAfterViewInit() {
    this.startModal.open()
  }

  getRecordingUrl() {
    const sessionId = window.sessionStorage.getItem("sessionClip.sessionId");
    const dashboardUrl = environment.dashboardUrl;
    return `${dashboardUrl}/sessions/${sessionId}`
  }

  onCompletedHandler() {
    this.recording = false;
    window["sessionClip"].stop();
    this.stopModal.open();
  }

  startRecord() {
    this.startModal.close();
    window["sessionClip"].start();
    this.recording = true;
  }

}
