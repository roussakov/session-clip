import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {EventType} from "../models/event-type";
import {BaseEventHandler} from "./base-event-handler";
import {getSequenceNumber} from "../../../common/modules/sequence-incrementor/sequence-incrementor.service";
import {WindowScroll} from "../models/window-scroll";

@EventListener({
    targetEl: window,
    eventName: "scroll",
})
export class WindowScrollEventHandler extends BaseEventHandler {

    handler(e: Event, windowRef: Window): void {

            const record: WindowScroll = {
                y: windowRef.pageYOffset,
                x: windowRef.pageXOffset,
                type: EventType.WindowScroll,
                time: (new Date).getTime(),
                sequenceNum: getSequenceNumber()
            };

            this.eventRecorderService.recordWindowScroll(record);
    }

}