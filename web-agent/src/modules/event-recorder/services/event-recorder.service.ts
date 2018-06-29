import {WebSocket, webSocketInstance} from "../../../core/services/web-socket.service";

export class EventRecorderService {

    constructor(private socket: WebSocket) {}

    record = (event:any) => this.socket.send("record", event);
}

export const eventRecorderServiceInstance = new EventRecorderService(webSocketInstance);