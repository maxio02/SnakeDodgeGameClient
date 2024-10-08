import { Vector } from "vector2d";
import { backgroundCanvas, gameCanvas, gameCanvasCtx } from "..";
import RectangularEmitter from "../ParticleSystem/RectangularEmitter";
import Powerup, { PowerupType } from "./powerup";
import { updateCanvasSize } from '../index';
import { drawGrid } from "../Drawer";
import { Player } from "../Models/Player";
import { currentPlayer, currentRoom } from "../MenuManager/login";
import Zone, { EaseFunction, ZoneType } from "./Zone";
import * as seedrandom from "seedrandom";
import { TinyColor } from '@ctrl/tinycolor';

export default class PowerupHandler {
  private _powerups: { [key: number]: Powerup } = {};
  private _effectZones: {[key: number]: Zone} = {};
  private _wallEmitters: RectangularEmitter[] = [];
  private _portalWalls = false;
  private _cameraLock = false;
  private _cameraLockTimeoutId: NodeJS.Timeout;
  private _arenaSize: number;
  private _gameCanvasDiv = document.getElementById(
    "game-canvas-container"
  ) as HTMLDivElement;
  constructor(arenaSize: number) {
    this._arenaSize = arenaSize;
    this.initializeWallEmitters(arenaSize);
  }

  private initializeWallEmitters(arenaSize: number) {
    this._wallEmitters = [];
    let sizes = [
      new Vector(arenaSize, 50),
      new Vector(50, arenaSize),
      new Vector(arenaSize, 50),
      new Vector(50, arenaSize),
    ];
    let directions = [
      new Vector(0, -1),
      new Vector(-1, 0),
      new Vector(0, 1),
      new Vector(1, 0),
    ];
    let positions = [
      new Vector(arenaSize/2, 50),
      new Vector(50, arenaSize/2),
      new Vector(arenaSize/2, arenaSize - 50),
      new Vector(arenaSize - 50, arenaSize/2),
    ];
    for (let i = 0; i < 4; i++) {
      this._wallEmitters.push(
        new RectangularEmitter(
          sizes[i].x,
          sizes[i].y,
          positions[i],
          0,
          gameCanvasCtx,
          {
            particleShape: "square",
            color: new TinyColor("#59eeebff"),
            emitTimeMillis: 0,
            emitDirection: directions[i],
            spreadAngle: Math.PI / 6,
            speed: 0.8,
            particleSize: 8,
            particleAge: 100,
            emitInterval: 1,
            emitAmountPerTick: 3,
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
          document.getElementById('game-canvas-container').style.transform = `scale(1) translate(0px, 0px)`;
          document.getElementById('game-canvas-container').style.rotate = '0rad';
          setTimeout(() => {
          updateCanvasSize();
          }, 200);
        }, powerup.duration);
        break;
      case PowerupType.Confusion:
        this.generateZones(powerup, 3);
        break;
      case PowerupType.Bomb:
        this.generateZones(powerup, 3);
        break;
      case PowerupType.Laser:
        // this.generateZones(powerup, 3);
        break;

    }
    this.removePowerup(powerup);
  }

  private generateZones(powerup: Powerup, amount: number){
    const rng = seedrandom(`${powerup.id}`);
    //TODO this radius should be changable
    let radius = 0
    let zoneType: ZoneType;
    let easeFunction: EaseFunction;
    switch(powerup.type){
      case PowerupType.Bomb:
        radius = 100;
        zoneType = ZoneType.BombShadow;
        easeFunction = EaseFunction.linear;
      break;
      case PowerupType.Confusion:
        radius = 200;
        zoneType = ZoneType.Confusion;
        easeFunction = EaseFunction.easeOutCubic
        break;
    }
    for(let i = 0; i < amount; i++){
      setTimeout(() => {
        const position = new Vector(Math.floor(rng() * (currentRoom.settings.arenaSize - 2*radius)) + radius, Math.floor(rng() * (currentRoom.settings.arenaSize - 2*radius)) + radius);
        //TODO this this dumb random id, that can overlap
        this._effectZones[Math.floor(Math.random() * 1000000)] = new Zone(position, gameCanvasCtx, radius, zoneType, easeFunction);
        // console.log(this._effectZones[currentNumberOfZones + i].position);
      }, 300 * i);
        
    }
  }

  public drawPowerUps() {
    Object.values(this._powerups).forEach((powerup) => {
      powerup.draw();
    });

    this._wallEmitters.forEach((emitter) => {
      emitter.tick(1);
      emitter.draw();
    });
  }

  public drawZones() {
    Object.values(this._effectZones).forEach((zone) => {
      zone.draw();
    });

    // Object.values(this._zones).filter(zone => zone.emitter.emitTime < 0);

    Object.keys(this._effectZones).forEach((key) => {
      const zone = this._effectZones[Number(key)];
      if (zone.emitter.emitTime < 0) {
        if(zone.type === ZoneType.BombShadow){
          this._effectZones[Math.floor(Math.random() * 1000000)] = new Zone(zone.position, gameCanvasCtx, 200, ZoneType.Bomb, EaseFunction.easeOutCubic);
        }
        delete this._effectZones[Number(key)];
      }
    });
    // console.log(this._effectZones);
  }


  private setWallState(isPortal: boolean) {
    this._portalWalls = isPortal;
    this._wallEmitters.forEach(
      (emitter) => (emitter.emitTime = isPortal ? Infinity : 0)
    );
    this._gameCanvasDiv.style.borderColor = isPortal
      ? "#34c6dc"
      : "var(--grid-color)"
  }

  public reset(){
    this._powerups = {};
    this._effectZones = {};
    clearTimeout(this._cameraLockTimeoutId);
    this._cameraLock = false;
    document.getElementById('game-canvas-container').style.transform = null;
    this.setWallState(false);

    this.initializeWallEmitters(this._arenaSize);
  }

  public get cameraLock() {
    return this._cameraLock;
  }
}
