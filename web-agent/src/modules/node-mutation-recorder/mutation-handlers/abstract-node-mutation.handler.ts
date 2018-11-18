import {NodeMutationRecorderService} from "../services/node-mutation-recorder.service";
import {MutationHandler} from "../../../common/modules/dom-observer/mutation-handler";

export abstract class NodeMutationHandler implements MutationHandler {
    constructor(protected nodeMutationRecorderService: NodeMutationRecorderService) {
    }

    abstract handle(node: Node): void;
}