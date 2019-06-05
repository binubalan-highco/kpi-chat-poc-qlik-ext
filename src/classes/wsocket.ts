import {IMessage} from "./message";

export interface WSocket{
    onclose: ((this: WebSocket) => any) | null;
    onerror: ((this: WebSocket, er:string) => any) | null;
    onmessage: ((this: WebSocket, message: IMessage) => any) | null;
    onopen: ((this: WebSocket) => any) | null;
}
