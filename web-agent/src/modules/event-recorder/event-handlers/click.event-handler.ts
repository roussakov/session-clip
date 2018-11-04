import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {MouseClick} from "../models/mouse-click";
import {EventType} from "../models/event-type";
import {BaseEventHandler} from "./base-event-handler";
import {getSequenceNumber} from "../../../common/modules/sequence-incrementor/sequence-incrementor.service";

@EventListener({
    target: window,
    eventName: "click"
})
export class ClickEventHandler extends BaseEventHandler {

    handler(e:MouseEvent):void {
        const record:MouseClick = {
            x: e.pageX,
            y: e.pageY,
            type:EventType.Click,
            time: (new Date).getTime(),
            sequenceNum: getSequenceNumber()
        };

        this.eventRecorderService.recordMouseClick(record);
    }

}
