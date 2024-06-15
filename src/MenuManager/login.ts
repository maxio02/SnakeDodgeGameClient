import { Player } from "../ViewModels/Player";
import { Room } from "../ViewModels/Room";
import { createRoom, joinRoom, setPlayerData } from "../WebSocketClient/websocket";


let currentRoom: Room | null = null;
let currentPlayer: Player | null = null;

const roomCodeInput = (document.getElementById('roomCodeInput') as HTMLInputElement);
const usernameInput = (document.getElementById('usernameInput') as HTMLInputElement);
const roomButton = document.getElementById('joinButton') as HTMLButtonElement;
const readyButton = document.getElementById('readyButton') as HTMLButtonElement;
const loginDiv= document.getElementById('login-div') as HTMLButtonElement;
const roomDiv= document.getElementById('room-div') as HTMLButtonElement;
const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
const roomUsersList = document.getElementById('room-users-list') as HTMLUListElement;
const roomCodeSpan= document.getElementById('room-code') as HTMLParagraphElement;
const playerCount = document.getElementById('player-count') as HTMLParagraphElement;
const colorPickerDiv = document.getElementById('color-picker-container');
const startProgressBar = document.getElementById('start-progress-bar');
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
    setPlayerData(currentPlayer, currentRoom.getCode());
    updateReadyButton(currentPlayer.isReady);
    
}

function updateReadyButton(isReady: boolean) {
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
    //set the client ViewModel of the room to the servers response
    let roomInfo = JSON.parse(data.toString());
    currentRoom = new Room (roomInfo['room']['code'], roomInfo['room']['host'], roomInfo['room']['players'], roomInfo['room']['maxSize'])

        //show startGameButton 
        if(currentPlayer.username == currentRoom.getHost().username) 
            {
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



    roomCodeInput.value = currentRoom.getCode();
    roomCodeSpan.innerHTML  = currentRoom.getCode();
    setPlayerData(currentPlayer, currentRoom.getCode());
    updateRoomList(data);
    
}

export function updateRoomList(data: JSON){
    let roomInfo = JSON.parse(data.toString());

    // updating the current room players and host
    currentRoom.setPlayers(roomInfo['room']['players']);
    currentRoom.setHost(roomInfo['room']['host']);
    currentRoom.setMaxSize(roomInfo['room']['maxSize'])
    

    playerCount.innerHTML = `${currentRoom.getPlayers().length}/${currentRoom.getMaxSize()}`;
    roomUsersList.innerHTML = '';

    currentRoom.getPlayers().forEach((player: { username: string | number; isReady: boolean; color: string;}) => {
        const playerItem = document.createElement('li');

        playerItem.textContent = player.username + '';
        
        if(player.username == currentRoom.getHost().username) {
            playerItem.insertAdjacentHTML('afterbegin', `<i class="fa-solid fa-crown" style="color: ${player.color};"></i>`)
            
        }else{
            playerItem.insertAdjacentHTML('afterbegin', `<i class="fa-solid fa-circle" style="color: ${player.color}; margin-left: 4px"></i>`)
        }

        if (player.isReady) {
            playerItem.insertAdjacentHTML('beforeend', ' <i class="fa-solid fa-circle" style="color: #37cb48;"></i>');
        } else {
            playerItem.insertAdjacentHTML('beforeend', ' <i class="fa-solid fa-circle" style="color: #cb3737;"></i>');
        }

        roomUsersList.appendChild(playerItem);
    });

    updateStartButtonProgress(currentRoom.getPlayers().filter(p => p.isReady).length, currentRoom.getMaxSize());
}


function updateStartButtonProgress(readyPlayerCount: number, maxPlayerCount: number){
    if (maxPlayerCount == 0){
        return;
    }
    startProgressBar.style.width =  Math.floor(readyPlayerCount/maxPlayerCount*100) + '%';
}
export function showErrorAnimation() {
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

export function updatePlayerColor() {
    currentPlayer.color = colorPicker.value;
    let colorPickerLabel = document.getElementById('color-label');
    colorPickerLabel.style.color = pickTextColorBasedOnBgColorAdvanced(colorPicker.value, '#FFFFFF', '#000000');
    setPlayerData(currentPlayer, currentRoom.getCode());
}

function pickTextColorBasedOnBgColorAdvanced(bgColor:string, lightColor: string, darkColor: string) {
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

  }

window.onload = () => {
    updateButton();
};

(window as any).updateButton = updateButton;
(window as any).handleRoomAction = handleRoomAction;
(window as any).handleReadyState = handleReadyState;
(window as any).updateColorPicker = updateColorPicker;
(window as any).updatePlayerColor = updatePlayerColor;
(window as any).startGame = startGame;