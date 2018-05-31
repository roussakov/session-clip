import {NodeMutationHandler} from "./abstract-node-mutation.handler";
import {iterateNode} from "../../../common-modules/node-iterator/node-iterator";
import {getUUID, SessionClipNode, setUUID} from "../../../common-modules/node-mutator/node-mutator";

export class NodeAddedHandler extends NodeMutationHandler {
    handle(addedNode:Node) {
        iterateNode(addedNode, (blaNode:Node) => {
            setUUID(<SessionClipNode>blaNode);
            this.recordNodeMutationService.addNode(getUUID(<SessionClipNode>blaNode), blaNode);
        });
    }
}