import {nodeMutationRecorderServiceInstance} from "./services/node-mutation-recorder.service";
import {NodeRemovedHandler} from "./mutation-handlers/node-removed.handler";
import {NodeAttributesChangedHandler} from "./mutation-handlers/node-attributes-changed.handler";
import {NodeAddedHandler} from "./mutation-handlers/node-added.handler";
import {observe} from "../../common/modules/dom-observer/dom-observer";

export const startDOMMutationCollector = () => {

    const observer = observe(document.documentElement, {
        nodeAddedHandler: new NodeAddedHandler(nodeMutationRecorderServiceInstance),
        nodeRemovedHandler: new NodeRemovedHandler(nodeMutationRecorderServiceInstance),
        nodeAttributesChangedHandler: new NodeAttributesChangedHandler(nodeMutationRecorderServiceInstance)
    });

    return {
        stop: () => observer.disconnect()
    }
};