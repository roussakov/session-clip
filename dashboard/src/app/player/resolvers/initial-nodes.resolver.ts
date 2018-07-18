import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {PlayerState} from "../store/state/player-state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {LoadPlayerRecordingsAction} from "../store/actions";
import {Recordings} from "../store/models/recordings.model";
import {getRecordingsState} from "../store/reducers/player-state.reducer";
import 'rxjs/add/operator/take';
import {InitialNode, InitialNodesService} from "../services/initial-nodes.service";

@Injectable()
export class InitialNodesResolver implements Resolve<Observable<InitialNode[]>> {
  constructor(private initialNodesService: InitialNodesService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<InitialNode[]> {
    return this.initialNodesService.getInitialNodes(route.params.sessionId)
  }

}
