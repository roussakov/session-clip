import {createNodeData} from "../helpers/create-node-data.helper";
import {RecordingsService, recordingsServiceInstance} from "../../../core/services/recordings.service";
import {createRecord} from "../../../common/modules/recordable";

export class DOMInitialStateRecorderService {
    constructor(private recordingsService: RecordingsService) {
    }

    addNode(id: number, node: Node) {
        this.recordingsService.send("nodeInitialStateRecord",
            createRecord("addedNode", createNodeData(id, node))
        );
    }
}

export const domInitialStateRecorderService = new DOMInitialStateRecorderService(recordingsServiceInstance);