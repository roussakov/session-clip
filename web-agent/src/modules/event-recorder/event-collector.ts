import {ClickEventHandler} from "./event-handlers/click.event-handler";
import {MouseMoveEventHandler} from "./event-handlers/mouse-move.event-handler";
import {WindowScrollEventHandler} from "./event-handlers/window-scroll.event-handler";
import {ViewportResizeEventHandler} from "./event-handlers/viewport-resize.event-handler";
import {eventRecorderServiceInstance} from "./services/event-recorder.service";
import {InputEventHandler} from "./event-handlers/input.event-handler";
import {InnerScrollEventHandler} from "./event-handlers/inner-scroll.event-handler";

export const startEventCollector = () => {
    const events = [ClickEventHandler, MouseMoveEventHandler, InnerScrollEventHandler, WindowScrollEventHandler, ViewportResizeEventHandler, InputEventHandler]
        .map(eventHandler => new eventHandler(eventRecorderServiceInstance));

    return {
        stop: () => events.forEach((event: any) => event.unsubscribe())
    }
};