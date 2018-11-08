import {MutationHandlers} from "./mutation-handlers";

export const observe = (target: Node, mutationHandlers: MutationHandlers): MutationObserver => {

    const {nodeAddedHandler, nodeRemovedHandler, nodeAttributesChangedHandler} = mutationHandlers;

    let mutationObserver = new MutationObserver(function (mutations) {

        mutations.forEach(function (mutation) {
            let nodesRemoved = mutation.type === "childList" && mutation.removedNodes.length > 0;
            let nodesAdded = mutation.type === "childList" && mutation.addedNodes.length > 0;
            let attributesChanged = mutation.type === "attributes";

            if (nodeAddedHandler) {
                nodesAdded && mutation.addedNodes.forEach(
                    (node: Node) => nodeAddedHandler.handle(node)
                );
            }

            if (nodeRemovedHandler) {
                nodesRemoved && mutation.removedNodes.forEach(
                    (node: Node) => nodeRemovedHandler.handle(node)
                );
            }

            if (nodeAttributesChangedHandler) {
                attributesChanged && nodeAttributesChangedHandler.handle(mutation.target);
            }

        });
    });

    mutationObserver.observe(target, {
        characterData: true,
        childList: true,
        subtree: true,
        characterDataOldValue: true,
        attributes: true,
        attributeOldValue: true
    });

    return mutationObserver;
};
