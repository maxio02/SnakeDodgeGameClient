import { createRoom, getReadyState, joinRoom, setReadyState } from "../WebSocketClient/websocket";

const roomCodeInput = (document.getElementById('roomCodeInput') as HTMLInputElement);
const usernameInput = (document.getElementById('usernameInput') as HTMLInputElement);
const roomButton = document.getElementById('joinButton') as HTMLButtonElement;
const readyButton = document.getElementById('readyButton') as HTMLButtonElement;
const loginDiv= document.getElementById('login-div') as HTMLButtonElement;
const roomDiv= document.getElementById('room-div') as HTMLButtonElement;
const roomUsersList = document.getElementById('room-users-list') as HTMLUListElement;
const roomTitle = document.getElementById('room-title') as HTMLParagraphElement;
const playerCount = document.getElementById('player-count') as HTMLParagraphElement;
let isReady = false;
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

export function handleReadyState() {
    isReady = !isReady;
    setReadyState(usernameInput.value, roomCodeInput.value, isReady)
    if(isReady){
        readyButton.classList.remove('red-button');
        readyButton.classList.add('green-button');
    }
    else{
        readyButton.classList.add('red-button');
        readyButton.classList.remove('green-button');
    }
    
}

export function showRoomView(data: JSON){
    
    let roomInfo = JSON.parse(data.toString());
    loginDiv.classList.add('display-none');
    roomDiv.classList.add('display-flex');
    roomCodeInput.value = roomInfo['room']['code'];
    roomTitle.innerHTML  = `WELCOME TO<br>${roomInfo['room']['code']}`;
    updateRoomList(data);
}

export function updateRoomList(data: JSON){
    let roomInfo = JSON.parse(data.toString());
    let players = roomInfo['room']['players'];
    playerCount.innerHTML = `${players.length}/${roomInfo['room']['maxSize']}`;
    roomUsersList.innerHTML = '';

    players.forEach((player: { username: string | number; isReady: boolean; }) => {
        const playerItem = document.createElement('li');
        playerItem.textContent = player.username + (player.isReady ? ' 🟢' : ' 🔴');
        roomUsersList.appendChild(playerItem);
    });
}

export function showErrorAnimation() {
    roomButton.classList.add('red-button');
    roomButton.classList.add('wiggle');
    setTimeout(() => {
    roomButton.classList.remove('red-button');
    roomButton.classList.remove('wiggle');
    }, 600)
}

(window as any).updateButton = updateButton;
(window as any).handleRoomAction = handleRoomAction;
(window as any).handleReadyState = handleReadyState;