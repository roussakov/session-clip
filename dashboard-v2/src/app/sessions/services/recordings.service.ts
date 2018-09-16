import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

export interface NodeAttribute {
  name: string,
  value: string
}

export interface InitialNodeRecord {
  id: string,
  nodeType: number,
  nodeName: string,
  attributes: NodeAttribute[],
  parentId: number,
  prevSiblingId: number,
  time: Date
}

export type RecordType = "mouseMove" |
  "viewportResize" |
  "scroll" |
  "click" |
  "addedNode" |
  "removedNode" |
  "mutatedNode";

export interface Record {
  type: RecordType,
  data: any
}

@Injectable()
export class RecordingsService {

  constructor(private httpClient: HttpClient) {
  }

  getInitialNodes(sessionId: string): Observable<InitialNodeRecord[]> {
    return this.httpClient.get<InitialNodeRecord[]>(`/api/initial-nodes/${sessionId}`);
  }

  getRecordings(sessionId: string): Observable<Record[]> {
    return this.httpClient.get<Record[]>(`/api/recordings/${sessionId}`);
  }

}
