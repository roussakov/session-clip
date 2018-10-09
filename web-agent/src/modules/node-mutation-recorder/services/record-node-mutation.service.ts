import {MutatedNode} from "../models/mutated-node";
import {RemovedNode} from "../models/removed-node";
import {extractAttributes} from "../helpers/extract-attributes.helper";
import {RecordType} from "../models/record-type";
import {createAddedNode} from "../helpers/create-added-node.helper";
import {RecordingsService, recordingsServiceInstance} from "../../../core/services/recordings.service";

export class RecordNodeMutationService {

    constructor(private recordingsService: RecordingsService){}

    addNode(id:number, node:Node) {
        this.recordingsService.send("addedNodeRecord", createAddedNode(id, node));
    }

    removeNode(id:number) {
        const node:RemovedNode = {id, type:RecordType.removedNode, time: (new Date).getTime()};

        this.recordingsService.send("removedNodeRecord", node);
    }

    mutateNode(id:number, node:Node) {
        const element = <Element>node;
        const mutatedNode:MutatedNode = {
            id,
            attributes: extractAttributes(element.attributes),
            type: RecordType.mutatedNode,
            time: (new Date).getTime()
        };

        this.recordingsService.send("mutatedNodeRecord", mutatedNode);
    }
}

export const recordNodeMutationServiceInstance = new RecordNodeMutationService(recordingsServiceInstance);