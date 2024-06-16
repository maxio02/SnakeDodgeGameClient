import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import { drawGrid } from "./Drawer";
import InputManager from "./InputManager";
import LineSegment from "./LineSegment";
import Snake from "./Snake";
import Emitter from "./ParticleSystem/Emitter";
import CollisionHandler from "./CollisionHandler";
import { MessageGameplay, messageLineSegment } from "./WebSocketClient/messageTypes";
import Segment from "./Segment";
import { currentPlayer, currentRoom } from "./MenuManager/login";

var fpsCounter = document.createElement('div');
fpsCounter.style.position = 'absolute';
fpsCounter.style.top = '10px';
fpsCounter.style.left = '10px';
fpsCounter.style.color = 'black';
document.body.appendChild(fpsCounter);
export var fps = 60;

export var gameCanvas = document.getElementById('game-canvas')  as HTMLCanvasElement;
export var gameCanvasCtx = gameCanvas.getContext('2d')!;

export var backgroundCanvas = document.getElementById('background-canvas')  as HTMLCanvasElement;
export var backgroundCanvasCtx = backgroundCanvas.getContext('2d')!;

backgroundCanvas!.width = backgroundCanvas.getBoundingClientRect().width;
backgroundCanvas!.height = backgroundCanvas.getBoundingClientRect().height;
gameCanvas!.width = gameCanvas.getBoundingClientRect().width;
gameCanvas!.height = gameCanvas.getBoundingClientRect().height;
export var gridSize = 60;
let inputManager;
function updateCanvasSize() {
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

    Object.values(currentRoom.getPlayers()).forEach(player => {
        player.snake.draw();
        // snake.updateEmitter((performance.now()/10 - lastTime)/10);
    })
    
    // collisionHandler.checkCollisions();
    // requestAnimationFrame(animate);
    
    // emitter.tick(0.3);
    // emitter.draw();
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
let initialized = false;

// const inputManagers: InputManager[] = []
// const colors: string[] = ["#ef8888", "#ff0000", "#00aabb", "#0000ee"]
// const keymaps: string[][] =[['A','D'],['F','H'],['J','L'], ['8','0']] 
// for (let i = 0; i < 2; i++){
//     let startPos = new Vector(Math.random()* 1800, Math.random()*900);
//     snakes.push(new Snake(new LineSegment(startPos, startPos.add(new Vector(10,10)), true ,Math.random()* 2* Math.PI), colors[i], gameCanvasCtx));
//     inputManagers.push(new InputManager(snakes[i], keymaps[i][0], keymaps[i][1]))
// }

// const collisionHandler = new CollisionHandler(snakes)
// const emitter = new Emitter(new Vector(gameCanvas.width/2, gameCanvas.height/2), 2, 10, 5, 'circle', {r:255, g:0, b:255, a:0.5}, gameCanvasCtx, true, true, 200)

// requestAnimationFrame(animate);



export function updateGameState(gameState: MessageGameplay) {

    if (!initialized) {

        // Initialize snakes the first time this function is called
        gameState.snakeHeads.forEach(headData => {
            let head = headData.lastSegment;
            let username = headData.username;
            let pos = head.endPoint
            currentRoom.getPlayers()[username].snake = new Snake(new LineSegment(new Vector(pos.x, pos.y) , new Vector(pos.x, pos.y) , head.isCollidable, head.endAngle),currentRoom.getPlayers()[username].color, gameCanvasCtx)
        });

        inputManager = new InputManager(currentRoom.getPlayers()[currentPlayer.username].snake,'A','D');

        initialized = true;
     } 
     else {
        // Update existing snakes based on the new game state
        gameState.snakeHeads.forEach(newHeadData => {
            let head = newHeadData.lastSegment;
            let username = newHeadData.username;
            let endPos = head.endPoint
            let snakeToUpdate = currentRoom.getPlayers()[username].snake;

          if(head.isNewThisTick){
            if(newHeadData.segmentType == 'LineSegment'){
                head = head as messageLineSegment
                let startPos = head.startPoint;
                snakeToUpdate.addSegment(new LineSegment(new Vector(startPos.x, startPos.y), new Vector(endPos.x, endPos.y), head.isCollidable, head.endAngle));
            } 
            else if (newHeadData.segmentType == 'ArcSegment'){
                // snakes[index].addSegment(new ArcSegment(head.))
            }
          }else{
            head = head as messageLineSegment
            let startPos = head.startPoint;
            snakeToUpdate.segments[snakeToUpdate.segments.length-1] = (new LineSegment(new Vector(startPos.x, startPos.y), new Vector(endPos.x, endPos.y), head.isCollidable, head.endAngle));
          }

        });
      }
      animate();


  }