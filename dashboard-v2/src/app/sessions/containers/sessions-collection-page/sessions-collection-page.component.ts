import {Component, OnInit} from '@angular/core';
import {Session, SessionService} from "../../services/session.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-sessions-collection-page',
  templateUrl: './sessions-collection-page.component.html',
  styleUrls: ['./sessions-collection-page.component.css']
})
export class SessionsCollectionPageComponent implements OnInit {

  public recordedSessions$: Observable<Session[]>;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.recordedSessions$ = this.sessionService.getSessions();
  }

}
