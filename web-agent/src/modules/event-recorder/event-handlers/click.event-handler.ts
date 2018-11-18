import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {MouseClickData} from "../models/mouse-click.data";
import {BaseEventHandler} from "./base-event-handler";
import {createRecord} from "../../../common/modules/recordable";

@EventListener({
    targetEl: window,
    eventName: "click"
})
export class ClickEventHandler extends BaseEventHandler {

    handler(e: MouseEvent): void {
        const mouseClickData: MouseClickData = {
            x: e.pageX,
            y: e.pageY,
        };

        this.eventRecorderService.recordMouseClick(createRecord("click", mouseClickData));
    }

}
