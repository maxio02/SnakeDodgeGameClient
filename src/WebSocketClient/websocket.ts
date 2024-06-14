import { showErrorAnimation, showRoomView, updateRoomList } from "../MenuManager/login";

let socket: WebSocket;

function initWebSocket() {
    socket = new WebSocket(`ws://${window.location.hostname}:8080`);
    
    socket.onopen = () => {
        console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Message from server:', data);
        
        switch (data.type) {
            case 'JOINED_ROOM':
                showRoomView(event.data);
                break;
            case 'ROOM_DOES_NOT_EXIST':
                showErrorAnimation();
                break;
            case 'ROOM_DATA':
                updateRoomList(event.data);
                break;
            case 'GAMEPLAY':
                // updateGameCanvas();
                break;
            case 'ERROR':
                alert(`Error: ${data.message}`);
                break;
        }
    };
    
    socket.onclose = () => {
        console.log('WebSocket connection closed');
    };
    
    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };
}

export function createRoom(username: string) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'CREATE_ROOM', username: username }));
    } else {
        console.error('WebSocket connection is not open');
    }
}

export function joinRoom(roomCode: string, username: string) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'JOIN_ROOM', roomCode: roomCode, username: username }));
    } else {
        console.error('WebSocket connection is not open');
    }
}

export function setReadyState(username: string, roomCode: string, readyState: boolean) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'SET_READY', username: username, roomCode: roomCode, readyState: readyState}));
    } else {
        console.error('WebSocket connection is not open');
    }
}

export function getReadyState(username: string) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'GET_READY', username: username }));
    } else {
        console.error('WebSocket connection is not open');
    }
}

export function sendKeyEventToServer(key: string, pressed: boolean){
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'KEY_EVENT', key: key, pressed: pressed }));
    } else {
        console.error('WebSocket connection is not open');
    }
}


initWebSocket();
