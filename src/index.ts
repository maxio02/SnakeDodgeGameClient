import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import { drawGrid } from "./Drawer";
import InputManager from "./InputManager";
import LineSegment from "./LineSegment";
import Snake from "./Snake";
import CircleEmitter from "./ParticleSystem/CircleEmitter";
import { MessageGameplay, PowerupAction, messageArcSegment, messageLineSegment } from "./WebSocketClient/messageTypes";
import { currentPlayer, currentRoom } from "./MenuManager/login";
import PowerupHandler from "./PowerupHandler";
import Powerup from "./PowerupSystem/powerup";

var fpsCounter = document.createElement('div');
fpsCounter.style.position = 'absolute';
fpsCounter.style.top = '10px';
fpsCounter.style.left = '10px';
fpsCounter.style.color = 'black';
document.body.appendChild(fpsCounter);
export var fps = 60;

export var gameCanvas = document.getElementById('game-canvas') as HTMLCanvasElement;
export var gameCanvasCtx = gameCanvas.getContext('2d')!;

export var backgroundCanvas = document.getElementById('background-canvas') as HTMLCanvasElement;
export var backgroundCanvasCtx = backgroundCanvas.getContext('2d')!;

backgroundCanvas!.width = backgroundCanvas.getBoundingClientRect().width;
backgroundCanvas!.height = backgroundCanvas.getBoundingClientRect().height;
gameCanvas!.width = gameCanvas.getBoundingClientRect().width;
gameCanvas!.height = gameCanvas.getBoundingClientRect().height;
//2000 / 66.666 ~= 30
export let gridSize = 66.666;
let inputManager;
let powerupHandler: PowerupHandler;
export function updateCanvasSize() {
    gameCanvas.width = gameCanvas.getBoundingClientRect().width;
    gameCanvas.height = gameCanvas.getBoundingClientRect().height;
    backgroundCanvas.width = backgroundCanvas.getBoundingClientRect().width;
    backgroundCanvas.height = backgroundCanvas.getBoundingClientRect().height;
    drawGrid();
}

function animate() {
    var mult = fps / 60;
    frameCount++;
    if (frameCount % 10 === 0) {
        fps = calculateFPS();
        fpsCounter.innerText = `FPS: ${fps}`;
    }
    gameCanvasCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    Object.values(currentRoom.players).forEach(player => {
        player.snake.draw();
        player.snake.updateEmitter((performance.now() / 10 - lastTime) / 10);
    })

    powerupHandler.draw();
}
var frameCount = 0;
var lastTime = performance.now() / 10;
function calculateFPS() {
    var currentTime = performance.now() / 10;
    var timeDiff = currentTime - lastTime;
    var fps = Math.round(1000 / timeDiff);
    lastTime = currentTime;
    return fps;
}

window.addEventListener("resize", updateCanvasSize);
drawGrid();

export function updateGameState(gameState: MessageGameplay) {

    if (currentPlayer.snake === null) {

        // Initialize snakes the first time this function is called
        gameState.snakeHeads.forEach(headData => {
            let head = headData.lastSegment;
            let username = headData.username;

            let pos = head.endPoint
            currentRoom.players[username].snake = new Snake(new LineSegment(new Vector(pos.x, pos.y), new Vector(pos.x, pos.y), head.isCollidable, head.endAngle), currentRoom.players[username].color, gameCanvasCtx);

        });
        currentPlayer.snake = (currentRoom.players[currentPlayer.username].snake);
        inputManager = new InputManager(currentRoom.players[currentPlayer.username].snake, ["A", "ARROWLEFT"], ["D", "ARROWRIGHT"]);
        powerupHandler = new PowerupHandler();
    }
    else {
        let currentUsernames: string[] = [];
        // Update existing snakes based on the new game state
        gameState.snakeHeads.forEach(newHeadData => {
            let head = newHeadData.lastSegment;
            let username = newHeadData.username;
            let endPos = head.endPoint
            let snakeToUpdate = currentRoom.players[username].snake;

        //update powerups list
        if(gameState.powerUpInfo !== null){
            if (gameState.powerUpInfo.action === PowerupAction.ADD){
                powerupHandler.addPowerup(Powerup.fromMessagePowerup(gameState.powerUpInfo, gameCanvasCtx));
            }
            else{
                powerupHandler.removePowerup(Powerup.fromMessagePowerup(gameState.powerUpInfo, gameCanvasCtx));
            }
        }

            //keep track of the usernames sent by the server in the data
            currentUsernames.push(username);

            if (head.isNewThisTick) {
                if (newHeadData.segmentType === 'LineSegment') {
                    head = head as messageLineSegment
                    let startPos = head.startPoint;
                    snakeToUpdate.addSegment(new LineSegment(new Vector(startPos.x, startPos.y), new Vector(endPos.x, endPos.y), head.isCollidable, head.endAngle));
                }
                else if (newHeadData.segmentType === 'ArcSegment') {
                    head = head as messageArcSegment
                    let center = head.center;
                    snakeToUpdate.addSegment(new ArcSegment(new Vector(center.x, center.y), head.radius, head.startAngle, head.endAngle, head.counterClockwise, head.isCollidable));
                }
            } else {
                if (newHeadData.segmentType === 'LineSegment') {
                    head = head as messageLineSegment
                    let startPos = head.startPoint;
                    snakeToUpdate.segments[snakeToUpdate.segments.length - 1] = (new LineSegment(new Vector(startPos.x, startPos.y), new Vector(endPos.x, endPos.y), head.isCollidable, head.endAngle));
                }
                else if (newHeadData.segmentType === 'ArcSegment') {
                    head = head as messageArcSegment
                    let center = head.center;
                    snakeToUpdate.segments[snakeToUpdate.segments.length - 1] = (new ArcSegment(new Vector(center.x, center.y), head.radius, head.startAngle, head.endAngle, head.counterClockwise, head.isCollidable));
                }
            }
        });

        //when a username that is on the client list is no longer seen in the data from the server, kill him
        Object.values(currentRoom.players).forEach(player => {
            if (!currentUsernames.includes(player.username) && player.snake.isAlive) {
                player.snake.kill();

                //set the last winner if noone is alive now
                if (Object.values(currentRoom.players).every(player => !player.snake.isAlive) === true) {
                    currentRoom.lastWinner = player

                }
            }
        });

    }
    animate();


}