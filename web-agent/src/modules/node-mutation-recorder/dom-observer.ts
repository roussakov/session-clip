import {RecordNodeMutationService} from "./services/record-node-mutation.service";
import {NodeRemovedHandler} from "./mutation-handlers/node-removed.handler";
import {NodeAttributesChangedHandler} from "./mutation-handlers/node-attributes-changed.handler";
import {NodeAddedHandler} from "./mutation-handlers/node-added.handler";
import {observe} from "../../common-modules/dom-observer/dom-observer";

export const startDomObserver = () => {
    const nodeMutationService = window["observeDom"] = new RecordNodeMutationService();

    const handlers = [NodeAddedHandler, NodeRemovedHandler, NodeAttributesChangedHandler]
        .map(handler => new handler(nodeMutationService));

    observe(document.documentElement, {
        nodeAddedHandler: handlers[0],
        nodeRemovedHandler: handlers[1],
        nodeAttributesChangedHandler: handlers[2]
    });


};