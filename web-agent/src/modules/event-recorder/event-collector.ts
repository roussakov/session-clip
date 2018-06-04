import {ClickEventHandler} from "./event-handlers/click.event-handler";
import {MouseMoveEventHandler} from "./event-handlers/mouse-move.event-handler";
import {ScrollEventHandler} from "./event-handlers/scroll.event-handler";
import {ViewportResizeEventHandler} from "./event-handlers/viewport-resize.event-handler";
import {EventRecorderService} from "./services/event-recorder.service";

export const startEventCollector = () => {

    const eventRecorderService = window["eventRecorderService"] = new EventRecorderService();

    [ClickEventHandler, MouseMoveEventHandler,ScrollEventHandler,ViewportResizeEventHandler]
        .map(eventHandler => new eventHandler(eventRecorderService));

};