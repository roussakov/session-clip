import {MouseMove} from "./models/mouse-move";
import {ViewportResize} from "./models/viewport-resize";
import {Scroll} from "./models/scroll";
import {MouseClick} from "./models/mouse-click";

export interface EventHandler {
    handler(event:Event):void;
}

enum EventType {
    MouseMove = "mouseMove",
    ViewportResize = "viewportResize",
    Scroll = "scroll",
    Click = "click"
}

@EventListener({
    target: window,
    eventName: "mousemove"
})
export class MouseMoveEventHandler implements EventHandler {

    constructor(private eventRecorderService) {}

    handler(e:MouseEvent):void {
        const record:MouseMove = {x:e.x, y:e.y, type: EventType.MouseMove, time:(new Date).toString()};
        this.eventRecorderService.record(record);
    }

}

@EventListener({
    target: window,
    eventName: "resize"
})
export class ViewportResizeEventHandler implements EventHandler {

    constructor(private eventRecorderService) {}

    handler(e:Event, windowRef:Window):void {
        const record:ViewportResize = {
            width: windowRef.innerWidth,
            height: windowRef.innerHeight,
            type: EventType.ViewportResize,
            time: (new Date).toString()
        };

        this.eventRecorderService.record(record);
    }

}

@EventListener({
    target: window,
    eventName: "scroll"
})
export class ScrollEventHandler implements EventHandler {

    constructor(private eventRecorderService) {}

    handler(e:Event, windowRef:Window):void {
        const record:Scroll = {
            y: windowRef.pageYOffset,
            x: windowRef.pageXOffset,
            type: EventType.Scroll,
            time: (new Date).toString()
        };

        this.eventRecorderService.record(record);
    }

}

@EventListener({
    target: window,
    eventName: "click"
})
export class ClickEventHandler implements EventHandler {

    constructor(private eventRecorderService) {}

    handler(e:MouseEvent):void {
        const record:MouseClick = {x: e.x, y: e.y, type:EventType.Click, time: (new Date()).toString()};

        this.eventRecorderService.record(record);
    }

}
