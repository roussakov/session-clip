import {MutationHandler} from "./mutation-handler";

export interface MutationHandlers {
    nodeAddedHandler: MutationHandler,
    nodeRemovedHandler: MutationHandler,
    nodeAttributesChangedHandler: MutationHandler
}