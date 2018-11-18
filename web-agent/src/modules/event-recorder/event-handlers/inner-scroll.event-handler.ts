import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {InnerScrollData} from "../models/inner-scroll.data";
import {BaseEventHandler} from "./base-event-handler";
import {getUUID} from "../../../common/modules/node-mutator/node-mutator";
import {createRecord} from "../../../common/modules/recordable";

@EventListener({
    targetEl: window,
    eventName: "scroll",
    capture: true,
})
export class InnerScrollEventHandler extends BaseEventHandler {

    handler(e: Event, windowRef: Window): void {
            //todo: refactor, add filters to EventListener decorator configuration
            if(e.target === windowRef.document) return;

            const innerScrollData: InnerScrollData = {
                nodeId: getUUID(e.target),
                y: e.target.scrollTop,
                x: e.target.scrollLeft,
            };

            this.eventRecorderService.recordInnerScroll(createRecord("innerScroll", innerScrollData));
    }

}