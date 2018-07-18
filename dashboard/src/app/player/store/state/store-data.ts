import { Recordings } from "../models/recordings.model";

export const INITIAL_STORE_DATA = {
	recordings: undefined
};

export interface StoreData {
	recordings: Recordings
}