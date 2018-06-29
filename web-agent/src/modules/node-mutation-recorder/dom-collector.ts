import {recordNodeMutationServiceInstance} from "./services/record-node-mutation.service";
import {iterateNode} from "../../common/modules/node-iterator/node-iterator";
import {getUUID, SessionClipNode, setUUID} from "../../common/modules/node-mutator/node-mutator";


export const startDomCollector = () => {
    iterateNode(document.documentElement, (node:Node) => {
        setUUID(<SessionClipNode>node);
        recordNodeMutationServiceInstance.addNode(getUUID(<SessionClipNode>node), node);
    });
};



