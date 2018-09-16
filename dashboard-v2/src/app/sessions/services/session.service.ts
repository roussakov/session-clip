import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

export interface Session {
  sessionId: string,
  userId: string,
  userInfo: any,
  createdAt: Date
}

@Injectable()
export class SessionService {

  constructor(private httpClient: HttpClient) {}

  getSessions():Observable<Session[]> {
    return this.httpClient.get<Session[]>("/api/session")
  }

  getSession(id:string):Observable<Session> {
    return this.httpClient.get<Session>(`/api/session/${id}`);
  }

}
