import {NodeMutationHandler} from "./abstract-node-mutation.handler";
import {getUUID, SessionClipNode} from "../../../common/modules/node-mutator/node-mutator";

export class NodeRemovedHandler extends NodeMutationHandler {
    handle(removedNode:Node) {
        this.nodeMutationRecorderService.removeNode(getUUID(<SessionClipNode>removedNode));
    }
}
