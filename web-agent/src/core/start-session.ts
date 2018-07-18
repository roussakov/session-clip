import {Session, SessionData} from "./services/session.service";
import {sessionStorageServiceInstance} from "./services/session-storage.service";
import {webSocketInstance} from "./services/web-socket.service";

export function startSession() {
    return webSocketInstance.connect()
        .then(socket => new Session(socket))
        .then(session => session.start())
        .then((data: SessionData) => sessionStorageServiceInstance.add("sessionClip.sessionId", data.sessionId));
}