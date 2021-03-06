import {SessionStorageService, sessionStorageServiceInstance} from "./session-storage.service";
import {WebSocket} from "./web-socket.service";
import {Recordable} from "../../common/modules/recordable";
import {webSocketInstance} from "./web-socket.service";

export class RecordingsService {
    constructor(private webSocket: WebSocket, private sessionStorage: SessionStorageService) {
    }

    send(recordType: string, recordBody: Recordable) {
        this.webSocket.send(recordType, {
            sessionId: this.sessionStorage.get("sessionClip.sessionId"),
            ...recordBody
        });
    }
}

export const recordingsServiceInstance = new RecordingsService(webSocketInstance, sessionStorageServiceInstance);