import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface Session {
  sessionId: string,
  userId: string,
  userInfo: UserInfo,
  createdAt: Date
}

export interface UserInfo {
  width: number,
  height: number
}

@Injectable()
export class SessionService {

  constructor(private httpClient: HttpClient) {}

  getSessions():Observable<Session[]> {
    return this.httpClient.get<Session[]>("/session")
  }

}
