import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface NodeAttribute {
  name: string,
  value: string;
}

export interface InitialNode {
  id: number,
  nodeType: number,
  nodeName: string,
  attributes?: NodeAttribute[],
  parentId?: number,
  prevSiblingId?: number,
  time: string,
}

@Injectable()
export class InitialNodesService {

  constructor(private http: HttpClient) {
  }

  getInitialNodes(sessionId: string): Observable<InitialNode[]> {
    return this.http.get<InitialNode[]>(`/initial-nodes/${sessionId}`)
  }

}
