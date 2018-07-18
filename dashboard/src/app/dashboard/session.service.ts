import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface Session {
  sessionId: string,
  userId: string,
  createdAt: Date
}

@Injectable()
export class SessionService {

  constructor(private httpClient: HttpClient) {}

  getSessions():Observable<Session[]> {
    return this.httpClient.get<Session[]>("/session")
  }

}
