import {EventListener} from "../../../common/decorators/event-listener.class-decorator";
import {BaseEventHandler} from "./base-event-handler";
import {WindowScrollData} from "../models/window-scroll.data";
import {createRecord} from "../../../common/modules/recordable";

@EventListener({
    targetEl: window,
    eventName: "scroll",
})
export class WindowScrollEventHandler extends BaseEventHandler {

    handler(e: Event, windowRef: Window): void {
        const windowScrollData: WindowScrollData = {
            y: windowRef.pageYOffset,
            x: windowRef.pageXOffset,
        };

        this.eventRecorderService.recordWindowScroll(createRecord("windowScroll", windowScrollData));
    }

}