import { Component, OnInit } from '@angular/core';
import {Session, SessionService} from "./session.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sessionsObservable$: Observable<Session[]>;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionsObservable$ = this.sessionService.getSessions();
  }

}
