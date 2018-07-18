import { Action } from "@ngrx/store";
import { Recordings } from "./models/recordings.model";

export const LOAD_PLAYER_RECORDINGS_ACTION = "LOAD_PLAYER_RECORDINGS_ACTION";
export const PLAYER_RECORDINGS_LOADED_ACTION = "PLAYER_RECORDINGS_LOADED_ACTION";


export interface ActionWithPayload extends Action {
	payload?: any;
}


export class LoadPlayerRecordingsAction implements ActionWithPayload {
	readonly type = LOAD_PLAYER_RECORDINGS_ACTION;

	constructor(public payload?:any){}
}

export class PlayerRecordingsLoadedAction implements ActionWithPayload {
	readonly type = PLAYER_RECORDINGS_LOADED_ACTION;

	constructor(public payload?:Recordings){}
}