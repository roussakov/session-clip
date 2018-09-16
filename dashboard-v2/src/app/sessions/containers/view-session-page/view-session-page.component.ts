import {Component, OnInit} from '@angular/core';
import {InitialNodeRecord, Record, RecordingsService} from "../../services/recordings.service";
import {Observable} from "rxjs/index";
import {ActivatedRoute} from "@angular/router";
import {Session, SessionService} from "../../services/session.service";

@Component({
  selector: 'app-view-session-page',
  templateUrl: './view-session-page.component.html',
  styleUrls: ['./view-session-page.component.css']
})
export class ViewSessionPageComponent implements OnInit {

  public initialNodes$: Observable<InitialNodeRecord[]>;
  public recordings$: Observable<Record[]>;
  public session$: Observable<Session>;

  constructor(
    private recordingsService: RecordingsService,
    private sessionService: SessionService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const sessionId = (<string>this.route.snapshot.params.id);
    this.session$ = this.sessionService.getSession(sessionId);
    this.initialNodes$ = this.recordingsService.getInitialNodes(sessionId);
    this.recordings$ = this.recordingsService.getRecordings(sessionId);
  }

}


