import {iterateNode} from "../../common/modules/node-iterator/node-iterator";
import {getUUID, SessionClipNode, setUUID} from "../../common/modules/node-mutator/node-mutator";
import {recordNodeInitialStateService} from "./services/record-node-initial-state.service";

export const startDomInitialStateCollector = () => {
    iterateNode(document.documentElement, (node:Node) => {
        setUUID(<SessionClipNode>node);
        recordNodeInitialStateService.addNode(getUUID(<SessionClipNode>node), node);
    });
};



