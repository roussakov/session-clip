import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {MouseMoveData} from "../models/mouse-move.data";
import {BaseEventHandler} from "./base-event-handler";
import {createRecord} from "../../../common/modules/recordable";

@EventListener({
    targetEl: window,
    eventName: "mousemove"
})
export class MouseMoveEventHandler extends BaseEventHandler {

    handler(e: MouseEvent): void {
        const mouseMoveData: MouseMoveData = {
            x: e.pageX,
            y: e.pageY,
        };

        this.eventRecorderService.recordMouseMove(createRecord("mouseMove", mouseMoveData));
    }

}