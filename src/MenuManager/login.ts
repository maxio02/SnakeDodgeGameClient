// src/login.ts
export function updateButton() {
    const roomCode = (document.getElementById('roomCodeInput') as HTMLInputElement).value;
    const username = (document.getElementById('usernameInput') as HTMLInputElement).value;
    const roomButton = document.getElementById('joinButton') as HTMLButtonElement;

    if (username.trim() == '') {
        roomButton.disabled = true;
    } else {
        roomButton.disabled = false;
    }

    if (roomCode.trim() == '') {
        roomButton.textContent = 'CREATE ROOM';
    } else {
        roomButton.textContent = 'JOIN ROOM';
    }
}

export function handleRoomAction() {
    const roomButton = document.getElementById('joinButton') as HTMLButtonElement;
    if (roomButton.innerText === 'CREATE ROOM') {
        createRoom();
    } else {
        joinRoom();
    }
}

function createRoom() {
    console.log('Room created');
}

function joinRoom() {
    console.log('Joined room');
}

(window as any).updateButton = updateButton;
(window as any).handleRoomAction = handleRoomAction;