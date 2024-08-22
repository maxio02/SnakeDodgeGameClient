import { updateCanvasSize } from "..";
import { drawGrid } from "../Drawer";
import { Player } from "../Models/Player";
import { GameState, Room, joinResult } from "../Models/Room";
import PowerupHandler from "../PowerupSystem/PowerupHandler";
import { GameStateData, MessagePlayer, MessageRoom, RoomSettings } from "../WebSocketClient/messageTypes";
import { createRoom, joinRoom, sendSettings, sendStartCommand, setPlayerData } from "../WebSocketClient/websocket";
import { resetCountDown } from "./countdown";
import { switchTheme} from './themeSwitch';


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

function triggerActionOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        handleRoomAction();
    }
};



export function handleReadyState() {

    currentPlayer.isReady = !currentPlayer.isReady;
    setPlayerData(currentPlayer);
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

export function showRoomView(roomInfo: MessageRoom) {

    let players: { [key: string]: Player } = {};
    Object.keys(roomInfo.players).forEach(username => {
        let playerData = roomInfo.players[username];
        players[username] = new Player(username, playerData.isReady, playerData.color);
    });


    currentRoom = new Room(roomInfo.code,
        new Player(roomInfo.host.username, roomInfo.host.isReady, roomInfo.host.color),
        roomInfo.settings,
        players);

        currentRoom.powerupHandler = new PowerupHandler(currentRoom.settings.arenaSize);

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
    switchGameView({type: 'GAME_STATE',state: GameState.IN_LOBBY});



    roomCodeInput.value = currentRoom.code;
    roomCodeSpan.innerHTML = currentRoom.code;
    setPlayerData(currentPlayer);
    updateRoomList(roomInfo);

}

export function updateRoomList(roomInfo: MessageRoom) {

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
    currentRoom.maxSize = roomInfo.settings.roomSize;

    
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

    //show host things
    if (currentPlayer.username === currentRoom.host.username) {
        document.getElementById('startButton').classList.remove('display-none');
        let settingsList = document.getElementById("settings-list") as HTMLUListElement;
        
        settingsList.querySelectorAll('input').forEach(element => {
            element.removeAttribute('disabled');
        });

    }


        // Update settings values from server
        currentRoom.settings = roomInfo.settings;
        (document.querySelector('input[name="room-size"]') as HTMLInputElement).value = roomInfo.settings.roomSize.toString();
        (document.querySelector('input[name="max-powerups"]') as HTMLInputElement).value = roomInfo.settings.maxPowerups.toString();
        (document.querySelector('input[name="powerup-interval"]') as HTMLInputElement).value = roomInfo.settings.powerupInterval.toString();
        (document.querySelector('input[name="self-collision"]') as HTMLInputElement).checked = roomInfo.settings.selfCollision;
        (document.querySelector('input[name="arena-size"]') as HTMLInputElement).value = roomInfo.settings.arenaSize.toString();

    updateStartButtonProgress(Object.values(currentRoom.players).filter(p => p.isReady).length, currentRoom.maxSize);
}


function updateStartButtonProgress(readyPlayerCount: number, maxPlayerCount: number) {
    if (maxPlayerCount === 0) {
        return;
    }
    startProgressBar.style.clipPath = `inset(0 ${100 - Math.floor(readyPlayerCount / maxPlayerCount * 100) + '%'} 0 0`;
}
export function showErrorAnimation(reason: joinResult) {
    let animationElement: HTMLElement = null;
    let message = '';
    switch(reason){
    case joinResult.ROOM_DOES_NOT_EXIST:
        animationElement = roomCodeInput;
        break;
    case joinResult.ROOM_FULL:
        animationElement = roomButton;
        message = 'ROOM FULL';
        break;
    case joinResult.GAME_RUNNING:
        animationElement = roomButton;
        message = 'GAME RUNNING';
        break;
    case joinResult.INVALID_USERNAME:
        animationElement = usernameInput;
        break;
    case joinResult.SUCCESS:
    }

    animationElement.classList.add('red-button');
    animationElement.classList.add('wiggle');
    if(message !== ''){
        animationElement.innerText=message;
    }
    setTimeout(() => {
        animationElement.classList.remove('red-button');
        animationElement.classList.remove('wiggle');
        if(message !== ''){
            animationElement.innerText='JOIN ROOM';
        }
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
    setPlayerData(currentPlayer);
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
    sendStartCommand();
}

function goBackToLobby() {
    switchGameView({type: 'GAME_STATE',state: GameState.IN_LOBBY});
    
}

function toggleSettingsDisplay(){
settingsDiv.classList.toggle('settings-top');
roomDiv.classList.toggle('shift-left');

}

function updateClasses(element: HTMLElement, classesToAdd: string[], classesToRemove: string[]) {
    element.classList.add(...classesToAdd);
    element.classList.remove(...classesToRemove);
  }

export function switchGameView(data: GameStateData) {
    switch (data.state) {
        case 0:
        //update the game canvas to fit the screen
        updateCanvasSize();
        updateClasses(gameDiv, ['center-menu-element'], ['right-menu-element','left-menu-element', 'display-none']);
        updateClasses(roomDiv, ['left-menu-element'], ['center-menu-element', 'shift-left']);
        updateClasses(settingsDiv, ['settings-top'], [])
        updateClasses(endgameDiv, ['right-menu-element'], ['center-menu-element']);
            break;
        case 1:

        updateClasses(roomDiv, ['center-menu-element'], ['right-menu-element', 'left-menu-element', 'display-none']);
        updateClasses(loginDiv, ['left-menu-element'], ['center-menu-element']);
        updateClasses(endgameDiv, ['right-menu-element'], ['center-menu-element']);

            break;
        case 2:
            updateClasses(endgameDiv, ['center-menu-element'], ['right-menu-element', 'display-none']);
            updateClasses(gameDiv, ['left-menu-element'], ['center-menu-element']);

            lastWinnerSpan.innerHTML = `${currentRoom.lastWinner.username}`;

            currentRoom.resetRoomForNewGame();
            currentPlayer.snake = null;
            currentPlayer.isReady = false;
            updateReadyButton(currentPlayer.isReady);
            resetCountDown();
            
            break;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    updateButton();
    usernameInput.addEventListener("keydown", triggerActionOnEnter);
    roomCodeInput.addEventListener("keydown", triggerActionOnEnter);
    
    if (!navigator.userAgent.toLowerCase().includes('firefox')) {
        colorPicker.onblur = function () {
          changeColorPickerLabelState(true);
        };
      }

});


function enforceMinMax(el: HTMLInputElement) {
    if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
        el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
        el.value = el.max;
      }
    }
  }

  function handleChangeSettings() {
    const settings: RoomSettings = {
        roomSize: parseInt((document.querySelector('input[name="room-size"]') as HTMLInputElement).value),
        maxPowerups: parseInt((document.querySelector('input[name="max-powerups"]') as HTMLInputElement).value),
        powerupInterval: parseInt((document.querySelector('input[name="powerup-interval"]') as HTMLInputElement).value),
        selfCollision: (document.querySelector('input[name="self-collision"]') as HTMLInputElement).checked,
        arenaSize: parseInt((document.querySelector('input[name="arena-size"]') as HTMLInputElement).value),
    };

    sendSettings(settings);
  }

  
(window as any).updateButton = updateButton;
(window as any).handleRoomAction = handleRoomAction;
(window as any).handleReadyState = handleReadyState;
(window as any).updateColorPicker = updateColorPicker;
(window as any).updatePlayerColor = updatePlayerColor;
(window as any).startGame = startGame;
(window as any).goBackToLobby = goBackToLobby;
(window as any).toggleSettingsDisplay = toggleSettingsDisplay;
(window as any).changeColorPickerLabelState = changeColorPickerLabelState;
(window as any).enforceMinMax = enforceMinMax;
(window as any).sendSettingsToServer = handleChangeSettings;
