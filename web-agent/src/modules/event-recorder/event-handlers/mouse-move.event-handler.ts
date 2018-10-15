import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {MouseMove} from "../models/mouse-move";
import {EventType} from "../models/event-type";
import {BaseEventHandler} from "./base-event-handler";

@EventListener({
    target: window,
    eventName: "mousemove"
})
export class MouseMoveEventHandler extends BaseEventHandler {

    handler(e:MouseEvent):void {
        const record:MouseMove = {x:e.pageX, y:e.pageY, type: EventType.MouseMove, time:(new Date).getTime()};
        this.eventRecorderService.recordMouseMove(record);
    }

}