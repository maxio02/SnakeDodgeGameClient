import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import { drawGrid } from "./Drawer";
import InputManager from "./InputManager";
import LineSegment from "./LineSegment";
import Snake from "./Snake";
import Emitter from "./ParticleSystem/Emitter";
import CollisionHandler from "./CollisionHandler";

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

function updateCanvasSize() {
    gameCanvas.width = gameCanvas.getBoundingClientRect().width;
    gameCanvas.height = gameCanvas.getBoundingClientRect().height;
    backgroundCanvas.width = backgroundCanvas.getBoundingClientRect().width;
    backgroundCanvas.height = backgroundCanvas.getBoundingClientRect().height;
    drawGrid();
    playerOneSnake.draw();
    playerTwoSnake.draw();
  }

function animate() {
    var mult = fps / 60;
    frameCount++;
    if (frameCount % 10 === 0) {
        fps = calculateFPS();
        fpsCounter.innerText = `FPS: ${fps}`;
    }
    gameCanvasCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    playerOneSnake.draw();
    playerOneSnake.move(2);
    
    playerTwoSnake.draw();
    playerTwoSnake.move(2);

    playerOneSnake.updateEmitter(0.3);
    playerTwoSnake.updateEmitter(0.3);

    collisionHandler.checkCollisions();
    requestAnimationFrame(animate);
    
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
const playerOneSnake = new Snake(new LineSegment(new Vector(100, 100), new Vector(110, 110), true ,Math.PI/4), "#ff0088", gameCanvasCtx);
const playerTwoSnake = new Snake(new LineSegment(new Vector(300, 300), new Vector(295, 295), true ,Math.PI/4), "#33ee55", gameCanvasCtx);

const playerOneInputManager = new InputManager(playerOneSnake, 'A', 'D');
const playerTwoInputManager = new InputManager(playerTwoSnake, 'J', 'L');
const collisionHandler = new CollisionHandler([playerOneSnake, playerTwoSnake])
// const emitter = new Emitter(new Vector(gameCanvas.width/2, gameCanvas.height/2), 2, 10, 5, 'circle', {r:255, g:0, b:255, a:0.5}, gameCanvasCtx, true, true, 200)

// snake.addSegment(new LineSegment(new Vector(100, 100), new Vector(200, 200)));
// snake.addSegment(new LineSegment(new Vector(100, 100), new Vector(200, 200)));
// snake.addSegment(new ArcSegment(new Vector(100, 100), 50, 0.5, 1));
playerOneSnake.draw();
playerTwoSnake.draw();

requestAnimationFrame(animate);