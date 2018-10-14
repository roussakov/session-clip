import {ClickEventHandler} from "./event-handlers/click.event-handler";
import {MouseMoveEventHandler} from "./event-handlers/mouse-move.event-handler";
import {ScrollEventHandler} from "./event-handlers/scroll.event-handler";
import {ViewportResizeEventHandler} from "./event-handlers/viewport-resize.event-handler";
import {eventRecorderServiceInstance} from "./services/event-recorder.service";
import {InputEventHandler} from "./event-handlers/input.event-handler";

export const startEventCollector = () => {
    [ClickEventHandler, MouseMoveEventHandler, ScrollEventHandler, ViewportResizeEventHandler, InputEventHandler]
        .forEach(eventHandler => new eventHandler(eventRecorderServiceInstance));
};