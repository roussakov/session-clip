import {NodeMutationHandler} from "./abstract-node-mutation.handler";
import {getUUID, SessionClipNode} from "../../../common/modules/node-mutator/node-mutator";

export class NodeAttributesChangedHandler extends NodeMutationHandler {
    handle(node:Node) {
        this.recordNodeMutationService.mutateNode(getUUID(<SessionClipNode>node), node);
    }
}