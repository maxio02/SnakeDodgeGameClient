import { createRoom, joinRoom } from "../WebSocketClient/websocket";

const roomCodeInput = (document.getElementById('roomCodeInput') as HTMLInputElement);
const usernameInput = (document.getElementById('usernameInput') as HTMLInputElement);
const roomButton = document.getElementById('joinButton') as HTMLButtonElement;

// src/login.ts
export function updateButton() {
    

    if (usernameInput.value.trim() == '') {
        roomButton.disabled = true;
    } else {
        roomButton.disabled = false;
    }

    if (roomCodeInput.value.trim().length == 5) {
        roomButton.textContent = 'JOIN ROOM';
    } else {
        roomButton.textContent = 'CREATE ROOM';
    }
}

export function handleRoomAction() {
    if (roomButton.innerText === 'CREATE ROOM') {
        createRoom(usernameInput.value);
    } else {
        joinRoom(roomCodeInput.value.toUpperCase(), usernameInput.value);
    }
}

export function showErrorAnimation() {
    roomButton.classList.add('red-error-message');
    roomButton.classList.add('wiggle');
    setTimeout(() => {
    roomButton.classList.remove('red-error-message');
    roomButton.classList.remove('wiggle');
    }, 600)
}

(window as any).updateButton = updateButton;
(window as any).handleRoomAction = handleRoomAction;