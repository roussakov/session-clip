import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {ViewportResizeData} from "../models/viewport-resize.data";
import {BaseEventHandler} from "./base-event-handler";
import {createRecord} from "../../../common/modules/recordable";

@EventListener({
    targetEl: window,
    eventName: "resize"
})
export class ViewportResizeEventHandler extends BaseEventHandler {

    handler(e: Event, windowRef: Window): void {
        const viewportResizeData: ViewportResizeData = {
            width: windowRef.innerWidth,
            height: windowRef.innerHeight,
        };

        this.eventRecorderService.recordViewPortResize(createRecord("viewportResize", viewportResizeData));
    }

}