import { inflate } from "pako";
import { updateGameState } from "..";
import { Dir } from "../InputManager";
import { currentPlayer, currentRoom, showErrorAnimation, showRoomView, switchGameView, updateRoomList } from "../MenuManager/login";
import { Player } from "../Models/Player";
import { MessageRoom, RoomSettings } from "./messageTypes";

let socket: WebSocket;

function initWebSocket() {
    // socket = new WebSocket(`ws://${window.location.hostname}:3000`);
    socket = new WebSocket(`wss://snakegame-server.maxio.site`);
    
    socket.onopen = () => {
        console.log('WebSocket connection established');
    };

    socket.binaryType = 'arraybuffer';
    socket.onmessage = (event) => {
        const JSONdata = JSON.parse(inflate(event.data as Uint8Array, {to: "string"}));
        console.log('Message from server:', JSONdata);
        
        switch (JSONdata.type) {
            case 'JOINED_ROOM':
                showRoomView(JSONdata.room as MessageRoom);
                break;
            case 'JOIN_FAIL':
                showErrorAnimation(JSONdata.reason);
                break;
            case 'ROOM_DATA':
                updateRoomList(JSONdata.room as MessageRoom);
                break;
            case 'GAME_STATE':
                switchGameView(JSONdata);
                break;
            case 'GD':
                updateGameState(JSONdata);
                break;
            case 'ERROR':
                alert(`Error: ${JSONdata.message}`);
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

export function setPlayerData(player: Player) {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'PLAYER_DATA', player: player, roomCode: currentRoom.code}));
    } else {
        console.error('WebSocket connection is not open');
    }
}

export function sendKeyEventToServer(key: Dir, pressed: boolean){
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'KEY_EVENT', roomCode: currentRoom.code, username: currentPlayer.username, key: key, pressed: pressed }));
    } else {
        console.error('WebSocket connection is not open');
    }
}

export function sendStartCommand() {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'BEGIN_GAME', roomCode: currentRoom.code}));
    } else {
        console.error('WebSocket connection is not open');
    }
}

export function sendSettings(settings: RoomSettings){
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'ROOM_SETTINGS', roomCode: currentRoom.code, settings: settings}));
    } else {
        console.error('WebSocket connection is not open');
    }
}


initWebSocket();
