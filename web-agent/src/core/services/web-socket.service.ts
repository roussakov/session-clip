import Socket = SocketIOClient.Socket;
import * as io from "socket.io-client";

export interface WebSocketOptions {
    uri:string;
}

export class WebSocket {

    private socketConnection:any;

    constructor(private socket:SocketIOClientStatic, private options: WebSocketOptions) {}

    connect():Promise<Socket> {
        this.socketConnection = this.socket.connect(this.options.uri);

        return new Promise((resolve) => {
            this.socketConnection.on("connect", () => {
                resolve(this.socketConnection)
            });
        });

    }

    send(key:string, message:any) {
        this.socketConnection.emit(key, message);
    }
}

export const webSocketInstance = new WebSocket(io, {uri:"http://localhost:8081"});