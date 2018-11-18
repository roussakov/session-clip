import {MutatedNodeData} from "../models/mutated-node.data";
import {extractNodeAttributes} from "../helpers/extract-node-attributes.helper";
import {createNodeData} from "../helpers/create-node-data.helper";
import {RecordingsService, recordingsServiceInstance} from "../../../core/services/recordings.service";
import {createRecord} from "../../../common/modules/recordable";

export class NodeMutationRecorderService {

    constructor(private recordingsService: RecordingsService) {
    }

    addNode(id: number, node: Node) {
        const nodeData = createNodeData(id, node);
        this.recordingsService.send("addedNodeRecord", createRecord("addedNode", nodeData));
    }

    removeNode(id: number) {
        this.recordingsService.send("removedNodeRecord", createRecord("removedNode", {id}));
    }

    mutateNode(id: number, node: Node) {
        const mutatedNodeData: MutatedNodeData = {id, attributes: extractNodeAttributes((<Element>node).attributes)};

        this.recordingsService.send("mutatedNodeRecord", createRecord("mutatedNode", mutatedNodeData));
    }
}

export const nodeMutationRecorderServiceInstance = new NodeMutationRecorderService(recordingsServiceInstance);