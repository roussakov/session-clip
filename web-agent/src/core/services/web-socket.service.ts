import Socket = SocketIOClient.Socket;
import * as io from "socket.io-client";

export interface WebSocketOptions {
    url:string;
}

export class WebSocket {

    private socketConnection:any;

    constructor(private socket:SocketIOClientStatic, private options: WebSocketOptions) {}

    connect():Promise<Socket> {
        this.socketConnection = this.socket.connect(this.options.url);

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

export const webSocketInstance = new WebSocket(io, {url:"//" + process.env.API_HOST});
