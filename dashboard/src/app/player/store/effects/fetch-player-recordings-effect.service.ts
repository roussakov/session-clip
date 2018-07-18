import { Injectable } from '@angular/core';
import { RecordingsService } from "../../services/recordings.service";
import { Effect, Actions } from "@ngrx/effects";
import { LOAD_PLAYER_RECORDINGS_ACTION, PlayerRecordingsLoadedAction, ActionWithPayload } from "../actions";
import { Recordings } from "../models/recordings.model";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";


@Injectable()
export class FetchPlayerRecordingsEffectService {

  constructor(private actions$: Actions, private recordingsService: RecordingsService) { }

  @Effect() playerRecordings$: Observable<ActionWithPayload> = this.actions$
      .ofType(LOAD_PLAYER_RECORDINGS_ACTION)
      .switchMap((action:ActionWithPayload) => {
        return this.recordingsService.getRecordings(action.payload)
      })
      .map((recordings: Recordings) => new PlayerRecordingsLoadedAction(recordings))

}
