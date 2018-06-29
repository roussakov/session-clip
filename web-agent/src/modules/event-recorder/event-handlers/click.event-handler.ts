import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {MouseClick} from "../models/mouse-click";
import {EventType} from "../models/event-type";
import {BaseEventHandler} from "./base-event-handler";

@EventListener({
    target: window,
    eventName: "click"
})
export class ClickEventHandler extends BaseEventHandler {

    handler(e:MouseEvent):void {
        const record:MouseClick = {x: e.x, y: e.y, type:EventType.Click, time: (new Date()).toString()};

        this.eventRecorderService.record(record);
    }

}