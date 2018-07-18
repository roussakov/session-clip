import {createAddedNode} from "../helpers/create-added-node.helper";
import {RecordingsService, recordingsServiceInstance} from "../../../core/services/recordings.service";

export class RecordNodeInitialStateService {
    constructor(private recordingsService: RecordingsService){}

    addNode(id:number, node:Node) {
        this.recordingsService.send("nodeInitialStateRecord", createAddedNode(id, node));
    }
}

export const recordNodeInitialStateService = new RecordNodeInitialStateService(recordingsServiceInstance);