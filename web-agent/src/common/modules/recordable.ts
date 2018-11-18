import {getSequenceNumber} from "./sequence-incrementor/sequence-incrementor.service";

export interface Recordable {
    type: string;
    time: number;
    sequenceNum: number;
    data: any
}

export const createRecord = (type: string, data: any): Recordable => ({
    type,
    data,
    time: (new Date).getTime(),
    sequenceNum: getSequenceNumber()
});
