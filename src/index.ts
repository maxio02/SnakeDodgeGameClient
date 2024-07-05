import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import { drawGrid } from "./Drawer";
import InputManager from "./InputManager";
import LineSegment from "./LineSegment";
import Snake from "./Snake";
import CircularEmitter from "./ParticleSystem/CircularEmitter";
import {
  ExistingArcSegmentMessage,
  ExistingLineSegmentMessage,
  MessageGameplay,
  NewArcSegmentMessage,
  NewLineSegmentMessage,
  PowerupAction,
} from "./WebSocketClient/messageTypes";
import { currentPlayer, currentRoom } from "./MenuManager/login";
import PowerupHandler from "./PowerupSystem/PowerupHandler";
import Powerup from "./PowerupSystem/powerup";
import { animateCountdown } from "./MenuManager/countdown";
const gameDiv = document.getElementById(
  "game-canvas-container"
) as HTMLDivElement;
var fpsCounter = document.createElement("div");
fpsCounter.style.position = "absolute";
fpsCounter.style.top = "10px";
fpsCounter.style.left = "10px";
fpsCounter.style.color = "black";
let prevGameDivAngle = 0;
document.body.appendChild(fpsCounter);
export var fps = 60;

export var gameCanvas = document.getElementById(
  "game-canvas"
) as HTMLCanvasElement;
export var gameCanvasCtx = gameCanvas.getContext("2d")!;

export var backgroundCanvas = document.getElementById(
  "background-canvas"
) as HTMLCanvasElement;
export var backgroundCanvasCtx = backgroundCanvas.getContext("2d")!;

backgroundCanvas!.width = backgroundCanvas.getBoundingClientRect().width;
backgroundCanvas!.height = backgroundCanvas.getBoundingClientRect().height;
gameCanvas!.width = gameCanvas.getBoundingClientRect().width;
gameCanvas!.height = gameCanvas.getBoundingClientRect().height;
//2000 / 66.666 ~= 30
export let gridSize = 66.666;
let inputManager;
export function updateCanvasSize() {
  gameCanvas.width = gameCanvas.getBoundingClientRect().width * 1.5;
  gameCanvas.height = gameCanvas.getBoundingClientRect().height * 1.5;
  backgroundCanvas.width = backgroundCanvas.getBoundingClientRect().width * 1.5;
  backgroundCanvas.height = backgroundCanvas.getBoundingClientRect().height * 1.5;
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

  Object.values(currentRoom.players).forEach((player) => {
    player.snake.draw();
    player.snake.updateEmitter((performance.now() / 10 - lastTime) / 15);
  });

  currentRoom.powerupHandler.draw();
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

function getClosestAngle(currentAngle: number, targetAngle: number) {
  const pi2 = Math.PI * 2;
  let delta = (targetAngle - currentAngle) % pi2;
  if (delta > Math.PI) {
    delta -= pi2;
  } else if (delta < -Math.PI) {
    delta += pi2;
  }
  return currentAngle + delta;
}

export function updateGameState(gameState: MessageGameplay) {
  if (currentPlayer.snake === null) {
    // Initialize snakes the first time this function is called
    gameState.snakeHeads.forEach((headData) => {
      //this can be done because the snake always begins with a line segment
      let serverHead = headData.lastSegment as NewLineSegmentMessage;
      let username = headData.username;

      let pos = serverHead.endPoint;
      currentRoom.players[username].snake = new Snake(
        new LineSegment(
          new Vector(parseFloat(pos.x), parseFloat(pos.y)),
          new Vector(parseFloat(pos.x), parseFloat(pos.y)),
          serverHead.isCollidable,
          parseFloat(serverHead.endAngle)
        ),
        currentRoom.players[username].color,
        gameCanvasCtx
      );
    });
    currentPlayer.snake = currentRoom.players[currentPlayer.username].snake;
    inputManager = new InputManager(
      currentRoom.players[currentPlayer.username].snake,
      ["A", "ARROWLEFT"],
      ["D", "ARROWRIGHT"]
    );
    
    animateCountdown();
    animate();
    Object.values(currentRoom.players).forEach((player) => {
      player.snake.drawHeadingDir();
    });
    return;
    
  } else {
    let currentUsernames: string[] = [];
    // Update existing snakes based on the new game state
    gameState.snakeHeads.forEach((newHeadData) => {
      let serverHead = newHeadData.lastSegment;
      let username = newHeadData.username;
      let snakeToUpdate = currentRoom.players[username].snake;

      if (gameState.powerupList !== null) {
        //update powerups list
        gameState.powerupList.forEach((powerupInfo) => {
          switch (powerupInfo.action) {
            case PowerupAction.REMOVE:
              currentRoom.powerupHandler.removePowerup(
                Powerup.fromMessagePowerup(powerupInfo, gameCanvasCtx)
              );
              break;
            case PowerupAction.SPAWN:
              currentRoom.powerupHandler.addPowerup(
                Powerup.fromMessagePowerup(powerupInfo, gameCanvasCtx)
              );
              break;
            case PowerupAction.APPLY:
              currentRoom.powerupHandler.applyPowerup(
                Powerup.fromMessagePowerup(powerupInfo, gameCanvasCtx), powerupInfo.player
              );
              break;
          }
        });
      }

      //keep track of the usernames sent by the server in the data
      currentUsernames.push(username);
      // translate(${head.endPoint.x * gameCanvas.width / 2000 }px, ${head.endPoint.y * gameCanvas.width / 2000}px)
      
      if (serverHead.isNewThisTick) {
        if (newHeadData.segmentType === "LineSegment") {
          let newLineHead =  serverHead as NewLineSegmentMessage;

          snakeToUpdate.addSegment(
            new LineSegment(
              new Vector(parseFloat(newLineHead.startPoint.x), parseFloat(newLineHead.startPoint.y)),
              new Vector(parseFloat(newLineHead.endPoint.x), parseFloat(newLineHead.endPoint.y)),
              newLineHead.isCollidable,
              parseFloat(newLineHead.endAngle)
            )
          );
        } else if (newHeadData.segmentType === "ArcSegment") {
          let newArcHead = serverHead as NewArcSegmentMessage;
          let center = newArcHead.center;
          snakeToUpdate.addSegment(
            new ArcSegment(
              new Vector(parseFloat(center.x), parseFloat(center.y)),
              parseFloat(newArcHead.radius),
              parseFloat(newArcHead.startAngle),
              parseFloat(newArcHead.endAngle),
              newArcHead.counterClockwise,
              newArcHead.isCollidable
            )
          );
        }
      } else {
        if (newHeadData.segmentType === "LineSegment") {
          serverHead = serverHead as ExistingLineSegmentMessage;
          let clientHead = snakeToUpdate.segments[snakeToUpdate.segments.length - 1] as LineSegment
          clientHead.endPoint = new Vector(parseFloat(serverHead.endPoint.x), parseFloat(serverHead.endPoint.y));

          //camera powerup effect stuff
          if (currentRoom.powerupHandler.cameraLock) {
            if (username === currentPlayer.username) {
              let newAngle = -clientHead.endAngle - Math.PI / 2;
              let closestAngle = getClosestAngle(prevGameDivAngle, newAngle);
              gameDiv.style.transform = `scale(2) rotate(${closestAngle}rad) translate(${
                (-serverHead.endPoint.x * window.innerHeight) / currentRoom.settings.arenaSize +
                window.innerHeight / 2
              }px, ${
                (-serverHead.endPoint.y * window.innerHeight) / currentRoom.settings.arenaSize +
                window.innerHeight / 2
              }px)`;
              prevGameDivAngle = closestAngle;
            }
          }
          
          

        } else if (newHeadData.segmentType === "ArcSegment") {

          serverHead = serverHead as ExistingArcSegmentMessage;
          let clientHead = snakeToUpdate.segments[snakeToUpdate.segments.length - 1] as ArcSegment
          clientHead.endAngle = parseFloat(serverHead.endAngle);

          //camera powerup effect stuff
          if (currentRoom.powerupHandler.cameraLock) {
            if (username === currentPlayer.username) {


              let newAngle = clientHead.isCounterClockwise()
                ? -clientHead.endAngle
                : -clientHead.endAngle - Math.PI;
              let closestAngle = getClosestAngle(prevGameDivAngle, newAngle);
              gameDiv.style.transform = `scale(2) rotate(${closestAngle}rad) translate(${
                (-clientHead.endPoint.x * window.innerHeight) / currentRoom.settings.arenaSize +
                window.innerHeight / 2
              }px, ${
                (-clientHead.endPoint.y * window.innerHeight) / currentRoom.settings.arenaSize +
                window.innerHeight / 2
              }px)`;
              prevGameDivAngle = closestAngle;
            }
          }
          
        }
      }
    });

    //when a username that is on the client list is no longer seen in the data from the server, kill him
    Object.values(currentRoom.players).forEach((player) => {
      if (!currentUsernames.includes(player.username) && player.snake.isAlive) {
        player.snake.kill();

        //set the last winner if noone is alive now
        if (
          Object.values(currentRoom.players).every(
            (player) => !player.snake.isAlive
          ) === true
        ) {
          currentRoom.lastWinner = player;
        }
      }
    });
  }
  animate();

}
