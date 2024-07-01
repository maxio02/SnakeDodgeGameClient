import { updateCanvasSize } from "..";
import { Player } from "../Models/Player";
import { GameState, Room } from "../Models/Room";
import { GameStateData, MessagePlayer, MessageRoom } from "../WebSocketClient/messageTypes";
import { createRoom, joinRoom, sendStartCommand, setPlayerData } from "../WebSocketClient/websocket";
import { resetCountDown } from "./countdown";


export let currentRoom: Room | null = null;
export let currentPlayer: Player | null = null;

const roomCodeInput = (document.getElementById('roomCodeInput') as HTMLInputElement);
const usernameInput = (document.getElementById('usernameInput') as HTMLInputElement);
const roomButton = document.getElementById('joinButton') as HTMLButtonElement;
const readyButton = document.getElementById('readyButton') as HTMLButtonElement;
const loginDiv = document.getElementById('login-div') as HTMLButtonElement;
const roomDiv = document.getElementById('room-div') as HTMLButtonElement;
const gameDiv = document.getElementById('game-canvas-container') as HTMLDivElement;
const endgameDiv = document.getElementById('endgame-div') as HTMLDivElement;
const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
const roomUsersList = document.getElementById('room-users-list') as HTMLUListElement;
const roomCodeSpan = document.getElementById('room-code') as HTMLParagraphElement;
const playerCount = document.getElementById('player-count') as HTMLParagraphElement;
const colorPickerDiv = document.getElementById('color-picker-container');
const startProgressBar = document.getElementById('start-progress-bar');
const lastWinnerSpan = document.getElementById('last-winner') as HTMLSpanElement;
const settingsButton = document.getElementById('room-settings-button') as HTMLElement;
const settingsDiv = document.getElementById('settings-div') as HTMLDivElement;
const colorPickerLabel = document.getElementById('color-label') as HTMLLabelElement;
// src/login.ts
export function updateButton() {

    if (usernameInput.value.trim() === '') {
        roomButton.disabled = true;
    } else {
        roomButton.disabled = false;
    }

    if (roomCodeInput.value.trim().length === 5) {
        roomButton.textContent = 'JOIN ROOM';
    } else {
        roomButton.textContent = 'CREATE ROOM';
    }
}

export function handleRoomAction() {
    const username = usernameInput.value;
    if (!username) return;

    currentPlayer = new Player(username);

    if (roomButton.innerText === 'CREATE ROOM') {
        createRoom(usernameInput.value);
    } else {

        joinRoom(roomCodeInput.value.toUpperCase(), usernameInput.value);
    }
}

export function handleReadyState() {

    currentPlayer.isReady = !currentPlayer.isReady;
    setPlayerData(currentPlayer, currentRoom.code);
    updateReadyButton(currentPlayer.isReady);

}

function updateReadyButton(isReady: boolean) {
    if (isReady) {
        readyButton.classList.remove('red-button');
        readyButton.classList.add('green-button');
    }
    else {
        readyButton.classList.add('red-button');
        readyButton.classList.remove('green-button');
    }
}

export function showRoomView(data: JSON) {
    //set the client Model of the room to the servers response
    let roomInfo: MessageRoom = JSON.parse(data.toString())['room'];

    let players: { [key: string]: Player } = {};
    Object.keys(roomInfo.players).forEach(username => {
        let playerData = roomInfo.players[username];
        players[username] = new Player(username, playerData.isReady, playerData.color);
    });


    currentRoom = new Room(roomInfo.code,
        new Player(roomInfo.host.username, roomInfo.host.isReady, roomInfo.host.color),
        players,
        roomInfo.maxSize);

    //show startGameButton 
    if (currentPlayer.username === currentRoom.host.username) {
        document.getElementById('startButton').classList.remove('display-none');
    }

    //set a random color for a player
    colorPickerDiv.style.backgroundColor = currentPlayer.color;
    colorPicker.value = currentPlayer.color;
    let colorPickerLabel = document.getElementById('color-label');
    colorPickerLabel.style.color = pickTextColorBasedOnBgColorAdvanced(colorPicker.value, '#FFFFFF', '#000000');

    //show the new element
    loginDiv.classList.add('display-none');
    roomDiv.classList.add('display-flex');



    roomCodeInput.value = currentRoom.code;
    roomCodeSpan.innerHTML = currentRoom.code;
    setPlayerData(currentPlayer, currentRoom.code);
    updateRoomList(data);

}

export function updateRoomList(data: JSON) {
    let roomInfo: MessageRoom = JSON.parse(data.toString())['room'];

    // updating the current room players and host

        Object.keys(roomInfo.players).forEach(username => {
            if (currentRoom.players[username] == undefined) {
                currentRoom.addPlayer(new Player(username, false, roomInfo.players[username].color));
            } else {
                currentRoom.players[username].color = roomInfo.players[username].color;
                currentRoom.players[username].isReady = roomInfo.players[username].isReady;
            }
        })

        // Remove players that are no longer in the room
    Object.keys(currentRoom.players).forEach(username => {
        if (!roomInfo.players.hasOwnProperty(username)) {
            currentRoom.removePlayer(username);
        }
    });
        
    currentRoom.host = new Player(roomInfo.host.username, roomInfo.host.isReady, roomInfo.host.color);
    currentRoom.maxSize = roomInfo.maxSize;

    
    playerCount.innerHTML = `${Object.keys(currentRoom.players).length}/${currentRoom.maxSize}`;
    roomUsersList.innerHTML = '';

    Object.values(currentRoom.players).forEach((player: { username: string | number; isReady: boolean; color: string; }) => {
        const playerItem = document.createElement('li');

        playerItem.textContent = player.username + '';

        if (player.username === currentRoom.host.username) {
            playerItem.insertAdjacentHTML('afterbegin', `<i class="fa-solid fa-crown" style="color: ${player.color};"></i>`)

        } else {
            playerItem.insertAdjacentHTML('afterbegin', `<i class="fa-solid fa-circle" style="color: ${player.color}; margin-left: 4px"></i>`)
        }

        if (player.isReady) {
            playerItem.insertAdjacentHTML('beforeend', ' <i class="fa-solid fa-circle" style="color: #37cb48;"></i>');
        } else {
            playerItem.insertAdjacentHTML('beforeend', ' <i class="fa-solid fa-circle" style="color: #cb3737;"></i>');
        }

        roomUsersList.appendChild(playerItem);
    });

    //show startGameButton 
    if (currentPlayer.username === currentRoom.host.username) {
        document.getElementById('startButton').classList.remove('display-none');
    }

    updateStartButtonProgress(Object.values(currentRoom.players).filter(p => p.isReady).length, currentRoom.maxSize);
}


function updateStartButtonProgress(readyPlayerCount: number, maxPlayerCount: number) {
    if (maxPlayerCount === 0) {
        return;
    }
    startProgressBar.style.clipPath = `inset(0 ${100 - Math.floor(readyPlayerCount / maxPlayerCount * 100) + '%'} 0 0`;
}
export function showErrorAnimation(reason: string) {
    console.log(reason);
    roomButton.classList.add('red-button');
    roomButton.classList.add('wiggle');
    setTimeout(() => {
        roomButton.classList.remove('red-button');
        roomButton.classList.remove('wiggle');
    }, 600)
}


export function updateColorPicker() {
    colorPickerDiv.style.backgroundColor = colorPicker.value;

}

export function changeColorPickerLabelState(enable: boolean) {
    if(enable){
        colorPickerLabel.style.opacity = '100';
    }else{
        colorPickerLabel.style.opacity = '0';
    }
    
}

export function updatePlayerColor() {
    currentPlayer.color = colorPicker.value;
    colorPickerLabel.style.color = pickTextColorBasedOnBgColorAdvanced(colorPicker.value, '#FFFFFF', '#000000');
    changeColorPickerLabelState(true);
    setPlayerData(currentPlayer, currentRoom.code);
}

function pickTextColorBasedOnBgColorAdvanced(bgColor: string, lightColor: string, darkColor: string) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    var uicolors = [r / 255, g / 255, b / 255];
    var c = uicolors.map((col) => {
        if (col <= 0.03928) {
            return col / 12.92;
        }
        return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    var L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (L > 0.4) ? darkColor : lightColor;
}

function startGame() {

    //verify that the player sending the start request is the host
    if (currentPlayer.username != currentRoom.host.username) {
        return;
    }
    sendStartCommand(currentRoom.code);
}

function goBackToLobby() {
    switchGameView({type: 'GAME_STATE',state: GameState.IN_LOBBY});
    currentRoom.resetRoomForNewGame();
    currentPlayer.snake = null;
    currentPlayer.isReady = false;
    updateReadyButton(currentPlayer.isReady);
    resetCountDown();
}

function toggleSettingsDisplay(){

settingsDiv.classList.toggle('display-none');

}

export function switchGameView(data: GameStateData) {
    switch (data.state) {
        case 0:
        loginDiv.classList.add('display-none');
        roomDiv.classList.add('display-none');
        roomDiv.classList.remove('display-flex');
        gameDiv.classList.remove('display-none');
        gameDiv.classList.add('display-flex');
        //update the game canvas to fit the screen
        updateCanvasSize();
        document.getElementById('login-screen-body').style.overflow = 'hidden';


            break;
        case 1:
        loginDiv.classList.add('display-none');
        loginDiv.classList.remove('display-flex');
        roomDiv.classList.add('display-flex');
        endgameDiv.classList.add('display-none');
        endgameDiv.classList.remove('display-flex');
        document.getElementById('login-screen-body').style.overflow = 'visible';
            break;
        case 2:
            lastWinnerSpan.innerHTML = `${currentRoom.lastWinner.username}`;
            gameDiv.classList.add('display-none');
            gameDiv.classList.remove('display-flex');
            endgameDiv.classList.add('display-flex');
            document.getElementById('login-screen-body').style.overflow = 'visible';
            break;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    updateButton();

    if (!navigator.userAgent.toLowerCase().includes('firefox')) {
        colorPicker.onblur = function () {
          changeColorPickerLabelState(true);
        };
      }

});

(window as any).updateButton = updateButton;
(window as any).handleRoomAction = handleRoomAction;
(window as any).handleReadyState = handleReadyState;
(window as any).updateColorPicker = updateColorPicker;
(window as any).updatePlayerColor = updatePlayerColor;
(window as any).startGame = startGame;
(window as any).goBackToLobby = goBackToLobby;
(window as any).toggleSettingsDisplay = toggleSettingsDisplay;
(window as any).changeColorPickerLabelState = changeColorPickerLabelState;