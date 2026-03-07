import { Socket, io } from "socket.io-client"


export const socket: Socket = io(import.meta.env.VITE_SOCKET_URL, {
    transports: ["websocket"],
    withCredentials: true,
    autoConnect: true,
});
