import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import { drawGrid } from "./Drawer";
import InputManager from "./InputManager";
import LineSegment from "./LineSegment";
import Snake from "./Snake";
import CircularEmitter from "./ParticleSystem/CircularEmitter";
import {
  MessageGameplay,
  PowerupAction,
  messageArcSegment,
  messageLineSegment,
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
let powerupHandler: PowerupHandler;
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
      let head = headData.lastSegment;
      let username = headData.username;

      let pos = head.endPoint;
      currentRoom.players[username].snake = new Snake(
        new LineSegment(
          new Vector(pos.x, pos.y),
          new Vector(pos.x, pos.y),
          head.isCollidable,
          head.endAngle
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
    powerupHandler = new PowerupHandler();
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
      let head = newHeadData.lastSegment;
      let username = newHeadData.username;
      let endPos = head.endPoint;
      let snakeToUpdate = currentRoom.players[username].snake;

      if (gameState.powerupList !== null) {
        //update powerups list
        gameState.powerupList.forEach((powerupInfo) => {
          switch (powerupInfo.action) {
            case PowerupAction.REMOVE:
              powerupHandler.removePowerup(
                Powerup.fromMessagePowerup(powerupInfo, gameCanvasCtx)
              );
              break;
            case PowerupAction.SPAWN:
              powerupHandler.addPowerup(
                Powerup.fromMessagePowerup(powerupInfo, gameCanvasCtx)
              );
              break;
            case PowerupAction.APPLY:
              powerupHandler.applyPowerup(
                Powerup.fromMessagePowerup(powerupInfo, gameCanvasCtx), powerupInfo.player
              );
              break;
          }
        });
      }

      //keep track of the usernames sent by the server in the data
      currentUsernames.push(username);
      // translate(${head.endPoint.x * gameCanvas.width / 2000 }px, ${head.endPoint.y * gameCanvas.width / 2000}px)

      if (head.isNewThisTick) {
        if (newHeadData.segmentType === "LineSegment") {
          head = head as messageLineSegment;
          let startPos = head.startPoint;

          snakeToUpdate.addSegment(
            new LineSegment(
              new Vector(startPos.x, startPos.y),
              new Vector(endPos.x, endPos.y),
              head.isCollidable,
              head.endAngle
            )
          );
        } else if (newHeadData.segmentType === "ArcSegment") {
          head = head as messageArcSegment;
          let center = head.center;
          snakeToUpdate.addSegment(
            new ArcSegment(
              new Vector(center.x, center.y),
              head.radius,
              head.startAngle,
              head.endAngle,
              head.counterClockwise,
              head.isCollidable
            )
          );
        }
      } else {
        if (newHeadData.segmentType === "LineSegment") {
          head = head as messageLineSegment;

          if (powerupHandler.cameraLock) {
            if (username === currentPlayer.username) {
              let newAngle = -head.endAngle - Math.PI / 2;
              let closestAngle = getClosestAngle(prevGameDivAngle, newAngle);
              gameDiv.style.transform = `scale(2) rotate(${closestAngle}rad) translate(${
                (-head.endPoint.x * window.innerHeight) / 2000 +
                window.innerHeight / 2
              }px, ${
                (-head.endPoint.y * window.innerHeight) / 2000 +
                window.innerHeight / 2
              }px)`;
              prevGameDivAngle = closestAngle;
            }
          }
          let startPos = head.startPoint;
          snakeToUpdate.segments[snakeToUpdate.segments.length - 1] =
            new LineSegment(
              new Vector(startPos.x, startPos.y),
              new Vector(endPos.x, endPos.y),
              head.isCollidable,
              head.endAngle
            );
        } else if (newHeadData.segmentType === "ArcSegment") {
          head = head as messageArcSegment;
          if (powerupHandler.cameraLock) {
            if (username === currentPlayer.username) {
              let newAngle = head.counterClockwise
                ? -head.endAngle
                : -head.endAngle - Math.PI;
              let closestAngle = getClosestAngle(prevGameDivAngle, newAngle);
              gameDiv.style.transform = `scale(2) rotate(${closestAngle}rad) translate(${
                (-head.endPoint.x * window.innerHeight) / 2000 +
                window.innerHeight / 2
              }px, ${
                (-head.endPoint.y * window.innerHeight) / 2000 +
                window.innerHeight / 2
              }px)`;
              prevGameDivAngle = closestAngle;
            }
          }
          let center = head.center;
          snakeToUpdate.segments[snakeToUpdate.segments.length - 1] =
            new ArcSegment(
              new Vector(center.x, center.y),
              head.radius,
              head.startAngle,
              head.endAngle,
              head.counterClockwise,
              head.isCollidable
            );
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
