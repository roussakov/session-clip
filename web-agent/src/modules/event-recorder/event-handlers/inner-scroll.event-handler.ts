import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {InnerScroll} from "../models/inner-scroll";
import {EventType} from "../models/event-type";
import {BaseEventHandler} from "./base-event-handler";
import {getSequenceNumber} from "../../../common/modules/sequence-incrementor/sequence-incrementor.service";
import {getUUID} from "../../../common/modules/node-mutator/node-mutator";

@EventListener({
    targetEl: window,
    eventName: "scroll",
    capture: true,
})
export class InnerScrollEventHandler extends BaseEventHandler {

    handler(e: Event, windowRef: Window): void {
            //todo: refactor, add filters to EventListener configuration
            if(e.target === windowRef.document) return;

            const record: InnerScroll = {
                nodeId: getUUID(e.target),
                y: e.target.scrollTop,
                x: e.target.scrollLeft,
                type: EventType.InnerScroll,
                time: (new Date).getTime(),
                sequenceNum: getSequenceNumber()
            };

            this.eventRecorderService.recordInnerScroll(record);
    }

}