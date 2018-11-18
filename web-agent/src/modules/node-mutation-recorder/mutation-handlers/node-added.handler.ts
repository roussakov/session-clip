import {NodeMutationHandler} from "./abstract-node-mutation.handler";
import {iterateNode} from "../../../common/modules/node-iterator/node-iterator";
import {getUUID, SessionClipNode, setUUID} from "../../../common/modules/node-mutator/node-mutator";

export class NodeAddedHandler extends NodeMutationHandler {
    handle(addedNode:Node) {
        //todo: check if iteration required here
        iterateNode(addedNode, (node:Node) => {
            if(!getUUID(<SessionClipNode>node)) {
                setUUID(<SessionClipNode>node);
                this.nodeMutationRecorderService.addNode(getUUID(<SessionClipNode>node), node);
            }
        });
    }
}