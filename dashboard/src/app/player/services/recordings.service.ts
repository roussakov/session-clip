import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Recordings } from "../store/models/recordings.model";
import { Observable } from "rxjs";

@Injectable()
export class RecordingsService {

  constructor(private http: HttpClient ) {}

  getRecordings(sessionId:string): Observable<Recordings> {
    return this.http.get<Recordings>(`/records/${sessionId}`)
  }

}
