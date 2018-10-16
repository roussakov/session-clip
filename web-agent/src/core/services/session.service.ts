import browser from 'browser-detect';

const START_SESSION_EVENT = "authentication";
const SESSION_CREATED_EVENT = "authenticated";

export interface SessionData {
    sessionId: string;
}

export class Session {

    constructor(private socket:any) {}

    start():Promise<SessionData> {
        this.socket.emit(START_SESSION_EVENT, {"userInfo": {
                width: window.innerWidth,
                height: window.innerHeight,
                origin: window.location.origin,
                href: window.location.href
            }, "platform": browser()});

        return new Promise<SessionData>((resolve)=> {
            this.socket.on(SESSION_CREATED_EVENT, resolve)
        });
    }

}