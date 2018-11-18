import {iterateNode} from "../../common/modules/node-iterator/node-iterator";
import {getUUID, SessionClipNode, setUUID} from "../../common/modules/node-mutator/node-mutator";
import {domInitialStateRecorderService} from "./services/dom-initial-state-recorder.service";

export const startDOMInitialStateCollector = () => {
    iterateNode(document.documentElement, (node:Node) => {
        setUUID(<SessionClipNode>node);
        domInitialStateRecorderService.addNode(getUUID(<SessionClipNode>node), node);
    });
};



