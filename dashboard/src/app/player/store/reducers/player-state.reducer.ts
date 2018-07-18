import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlayerState, INITIAL_PLAYER_STATE } from "../state/player-state";
import { PLAYER_RECORDINGS_LOADED_ACTION, ActionWithPayload } from "../actions";
import { Recordings } from "../models/recordings.model";


export function storeReducer(state: PlayerState = INITIAL_PLAYER_STATE, action: ActionWithPayload) {

	switch(action.type) {
		case PLAYER_RECORDINGS_LOADED_ACTION:
			return handlePaymentRecordingsLoadedAction(state, action.payload);

		default:
			return state;
	}

}

function handlePaymentRecordingsLoadedAction(state: PlayerState, payload: Recordings):PlayerState {
	const newState:PlayerState = Object.assign({},state);
	newState.storeData.recordings = payload;

	return newState;
}



export const getPlayerState = createFeatureSelector<PlayerState>("player");
export const getRecordingsState = createSelector(getPlayerState, (state:PlayerState) => state.storeData.recordings);