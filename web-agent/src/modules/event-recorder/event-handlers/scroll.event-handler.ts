import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {Scroll} from "../models/scroll";
import {EventType} from "../models/event-type";
import {BaseEventHandler} from "./base-event-handler";

@EventListener({
    target: window,
    eventName: "scroll"
})
export class ScrollEventHandler extends BaseEventHandler {

    handler(e:Event, windowRef:Window):void {
        const record:Scroll = {
            y: windowRef.pageYOffset,
            x: windowRef.pageXOffset,
            type: EventType.Scroll,
            time: (new Date).getTime()
        };

        this.eventRecorderService.recordScroll(record);
    }

}