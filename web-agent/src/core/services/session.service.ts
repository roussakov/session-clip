const START_SESSION_EVENT = "authentication";
const SESSION_CREATED_EVENT = "authenticated";

export interface SessionData {
    id: string;
}

export class Session {

    constructor(private socket:any) {}

    start():Promise<SessionData> {
        this.socket.emit(START_SESSION_EVENT);

        return new Promise<SessionData>((resolve)=> {
            this.socket.on(SESSION_CREATED_EVENT, resolve)
        });
    }

}