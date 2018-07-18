import { StoreData, INITIAL_STORE_DATA } from "./store-data";


export const INITIAL_PLAYER_STATE = {
	storeData: INITIAL_STORE_DATA
};


export interface PlayerState {
	storeData: StoreData,
}