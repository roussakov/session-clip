import {RecordNodeMutationService} from "../services/record-node-mutation.service";
import {MutationHandler} from "../../../core/dom-observer/mutation-handler";

export abstract class NodeMutationHandler implements MutationHandler {
    constructor(protected recordNodeMutationService:RecordNodeMutationService) {}

    abstract handle(node:Node):void;
}