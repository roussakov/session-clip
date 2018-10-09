import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { RecordingsService} from "../../services/recordings.service";
import {zip} from "rxjs/index";
import {ActivatedRoute} from "@angular/router";
import {SessionService} from "../../services/session.service";
import {PlayerContainerComponent} from "../../../player/containers/player-container/player-container.component";

@Component({
  selector: 'app-view-session-page',
  templateUrl: './view-session-page.component.html',
  styleUrls: ['./view-session-page.component.css']
})
export class ViewSessionPageComponent implements AfterViewInit {

  @ViewChild(PlayerContainerComponent)
  private playerContainerComponent: PlayerContainerComponent;

  constructor(
    private recordingsService: RecordingsService,
    private sessionService: SessionService,
    private route: ActivatedRoute) {}

  ngAfterViewInit() {
    const sessionId = (<string>this.route.snapshot.params.id);

    zip(
      this.recordingsService.getInitialNodes(sessionId),
      this.recordingsService.getRecordings(sessionId),
      this.sessionService.getSession(sessionId)
    ).subscribe(([DOMState, recordings, sessionMetadata]) => this.playerContainerComponent.setPlayerData(DOMState, recordings, sessionMetadata));
  }

}


