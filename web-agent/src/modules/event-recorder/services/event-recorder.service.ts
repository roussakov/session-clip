import {WebSocket, webSocketInstance} from "../../../core/services/web-socket.service";
import {ViewportResize} from "../models/viewport-resize";
import {Scroll} from "../models/scroll";
import {MouseMove} from "../models/mouse-move";
import {MouseClick} from "../models/mouse-click";

export class EventRecorderService {

    constructor(private socket: WebSocket) {}

    recordViewPortResize = (record:ViewportResize) => this.socket.send("viewPortResizeRecord", record);
    recordScroll = (record:Scroll) => this.socket.send("scrollRecord", record);
    recordMouseMove = (record:MouseMove) => this.socket.send("mouseMoveRecord", record);
    recordMouseClick = (record:MouseClick) => this.socket.send("mouseClickRecord", record);
}

export const eventRecorderServiceInstance = new EventRecorderService(webSocketInstance);