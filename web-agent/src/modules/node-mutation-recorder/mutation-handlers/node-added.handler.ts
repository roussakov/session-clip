import {NodeMutationHandler} from "./abstract-node-mutation.handler";
import {iterateNode} from "../../../common/modules/node-iterator/node-iterator";
import {getUUID, SessionClipNode, setUUID} from "../../../common/modules/node-mutator/node-mutator";

export class NodeAddedHandler extends NodeMutationHandler {
    handle(addedNode:Node) {
        iterateNode(addedNode, (node:Node) => {
            setUUID(<SessionClipNode>node);
            this.recordNodeMutationService.addNode(getUUID(<SessionClipNode>node), node);
        });
    }
}