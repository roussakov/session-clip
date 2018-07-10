import {Session, SessionData} from "./services/session.service";
import {SessionStorageService} from "./services/session-storage.service";
import {webSocketInstance} from "./services/web-socket.service";

export function startSession() {
    const sessionStorage = new SessionStorageService(window.sessionStorage);

    return webSocketInstance.connect()
        .then(socket => new Session(socket))
        .then(session => session.start())
        .then((data: SessionData) => sessionStorage.add("sessionClip.sessionId", data.sessionId));
}