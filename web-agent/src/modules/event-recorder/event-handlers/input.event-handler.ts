import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {BaseEventHandler} from "./base-event-handler";
import {Input} from "../models/input";
import {EventType} from "../models/event-type";

@EventListener({
    target: window,
    eventName: "input"
})
export class InputEventHandler extends BaseEventHandler {

    handler(e:Event, windowRef:Window):void {
        const record:Input = {
            type: EventType.Input,
            id: e.target.SESSION_CLIP_ID,
            value: e.target.value,
            time: (new Date).getTime()
        };

        this.eventRecorderService.recordInput(record);
    }

}