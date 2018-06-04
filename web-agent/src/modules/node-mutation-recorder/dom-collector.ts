import {RecordNodeMutationService} from "./services/record-node-mutation.service";
import {iterateNode} from "../../common/modules/node-iterator/node-iterator";
import {getUUID, SessionClipNode, setUUID} from "../../common/modules/node-mutator/node-mutator";


export const startDomCollector = () => {
    const nodeMutationService = window["nodeMutationServiceCollector"] = new RecordNodeMutationService();

    iterateNode(document.documentElement, (node:Node) => {
        setUUID(<SessionClipNode>node);
        nodeMutationService.addNode(getUUID(<SessionClipNode>node), node);
    });
};



