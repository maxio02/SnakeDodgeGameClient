import { Vector } from "vector2d";
import { backgroundCanvas, gameCanvas, gameCanvasCtx } from "..";
import RectangularEmitter from "../ParticleSystem/RectangularEmitter";
import Powerup, { PowerupType } from "./powerup";
import { PowerupAction } from "../WebSocketClient/messageTypes";
import { updateCanvasSize } from '../index';
import { drawGrid } from "../Drawer";
import { Player } from "../Models/Player";
import { currentPlayer } from "../MenuManager/login";

export default class PowerupHandler {
  private _powerups: { [key: number]: Powerup } = {};
  private _wallEmitters: RectangularEmitter[] = [];
  private _portalWalls = false;
  private _cameraLock = false;
  private _cameraLockTimeoutId: NodeJS.Timeout;
  private _gameCanvasDiv = document.getElementById(
    "game-canvas-container"
  ) as HTMLDivElement;
  constructor() {
    this.initializeWallEmitters();
  }

  private initializeWallEmitters() {
    let sizes = [
      new Vector(2000, 50),
      new Vector(50, 2000),
      new Vector(2000, 50),
      new Vector(50, 2000),
    ];
    let directions = [
      new Vector(0, -1),
      new Vector(-1, 0),
      new Vector(0, 1),
      new Vector(1, 0),
    ];
    let positions = [
      new Vector(1000, 50),
      new Vector(50, 1000),
      new Vector(1000, 1950),
      new Vector(1950, 1000),
    ];
    for (let i = 0; i < 4; i++) {
      this._wallEmitters.push(
        new RectangularEmitter(
          sizes[i].x,
          sizes[i].y,
          positions[i],
          gameCanvasCtx,
          {
            particleShape: "square",
            color: "#59eeebff",
            emitTimeMillis: 0,
            emitDirection: directions[i],
            spreadAngle: Math.PI / 6,
            speed: 0.8,
            particleSize: 8,
            particleAge: 100,
            emitInterval: 1,
            emitAmountPerTick: 4,
            fadeDirection: "reverse",
          }
        )
      );
    }
  }

  public addPowerup(powerup: Powerup) {
    this._powerups[powerup.id] = powerup;
  }

  public removePowerup(powerup: Powerup) {
    delete this._powerups[powerup.id];
  }

  public applyPowerup(powerup: Powerup, player: Player) {
    switch (powerup.type) {
      case PowerupType.PortalWalls:
        this.setWallState(!this._portalWalls);
        break;
      case PowerupType.CameraLockToPlayer:
        if(player.username === currentPlayer.username || !currentPlayer.snake.isAlive){
          break;
        }

        if(this._cameraLockTimeoutId){
          clearTimeout(this._cameraLockTimeoutId);
          
        }else{
        //increase the canvas resolution in order to decrease the blur
        gameCanvas.width = gameCanvas.getBoundingClientRect().width * 2;
        gameCanvas.height = gameCanvas.getBoundingClientRect().height * 2;
        backgroundCanvas.width = backgroundCanvas.getBoundingClientRect().width * 2;
        backgroundCanvas.height = backgroundCanvas.getBoundingClientRect().height * 2;
        drawGrid();
        }
        this._cameraLock = true;


        this._cameraLockTimeoutId = setTimeout(() => {
          this._cameraLock = false;
          document.getElementById('game-canvas-container').style.transform = `scale(1) rotate(0rad) translate(0px, 0px)`;
          setTimeout(() => {
          updateCanvasSize();
          }, 200);
        }, powerup.duration);
    }
    this.removePowerup(powerup);
  }

  private generateZones(type: PowerupType, amount: number){
    
  }

  public draw() {
    Object.values(this._powerups).forEach((powerup) => {
      powerup.draw();
    });
    this._wallEmitters.forEach((emitter) => {
      emitter.tick(1);
      emitter.draw();
    });
  }

  private setWallState(isPortal: boolean) {
    this._portalWalls = isPortal;
    this._wallEmitters.forEach(
      (emitter) => (emitter.emitTime = isPortal ? Infinity : 0)
    );
    this._gameCanvasDiv.style.borderColor = isPortal
      ? "#34c6dc"
      : "#555555";
  }

  public reset(){
    this._powerups = {};
    clearTimeout(this._cameraLockTimeoutId);
    this._cameraLock = false;
    document.getElementById('game-canvas-container').style.transform = null;
    this.setWallState(false);
  }

  public get cameraLock() {
    return this._cameraLock;
  }
}
