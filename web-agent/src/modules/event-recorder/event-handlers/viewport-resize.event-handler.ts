import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {ViewportResize} from "../models/viewport-resize";
import {EventType} from "../models/event-type";
import {BaseEventHandler} from "./base-event-handler";
import {getSequenceNumber} from "../../../common/modules/sequence-incrementor/sequence-incrementor.service";

@EventListener({
    target: window,
    eventName: "resize"
})
export class ViewportResizeEventHandler extends BaseEventHandler {

    handler(e:Event, windowRef:Window):void {
        const record:ViewportResize = {
            width: windowRef.innerWidth,
            height: windowRef.innerHeight,
            type: EventType.ViewportResize,
            time: (new Date).getTime(),
            sequenceNum: getSequenceNumber()
        };

        this.eventRecorderService.recordViewPortResize(record);
    }

}