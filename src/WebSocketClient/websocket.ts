import { showErrorAnimation } from "../MenuManager/login";

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
            case 'ROOM_CREATED':
                alert('Room created successfully!');
                break;
            case 'JOINED_ROOM':
                alert('Joined room successfully!');
                break;
            case 'ROOM_DOES_NOT_EXIST':
                showErrorAnimation();
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

initWebSocket();
