import { Vector } from "vector2d";
import CircularEmitter from "../ParticleSystem/CircularEmitter";
import { MessagePowerup } from "../WebSocketClient/messageTypes";
import { currentRoom } from "../MenuManager/login";
import { TinyColor } from '@ctrl/tinycolor';

export enum PowerupType {
  SpeedUp,
  SpeedDown,
  Bomb,
  // FlipButtons,
  Invisibility,
  PortalWalls,
  CameraLockToPlayer,
  Confusion
}

const SVG_PATHS: { [key in PowerupType]: string } = {
  [PowerupType.SpeedUp]: "../assets/powerups/speedup.svg",
  [PowerupType.SpeedDown]: "../assets/powerups/speeddown.svg",
  [PowerupType.Bomb]: "../assets/powerups/bomb.svg",
  // [PowerupType.FlipButtons]: "../assets/powerups/flipbuttons.svg",
  [PowerupType.Confusion]: "../assets/powerups/confusion.svg",
  [PowerupType.Invisibility]: "../assets/powerups/invisibility.svg",
  [PowerupType.PortalWalls]: "../assets/powerups/portalwalls.svg",
  [PowerupType.CameraLockToPlayer]: "../assets/powerups/temp.svg",
};

export default class Powerup {
  private _id: number;
  private _position: Vector;
  private _canvasCtx: CanvasRenderingContext2D;
  private _color: TinyColor;
  private _radius: number = 30;
  private _type: PowerupType;
  private _img: HTMLImageElement;
  private _emitter: CircularEmitter;
  private _duration: number;

  constructor(
    id: number,
    position: Vector,
    canvasCtx: CanvasRenderingContext2D,
    color: TinyColor,
    type: PowerupType,
    duration: number
  ) {
    this._id = id;
    this._position = position;
    this._canvasCtx = canvasCtx;
    this._color = color;
    this._type = type;
    this._duration = duration;
    this._img = new Image();
    this._img.src = SVG_PATHS[this._type];
    this._emitter = new CircularEmitter(
      this._radius * 0.6,
      this._position,
      this._canvasCtx,
      {
        color: this._color,
        particleSize: this._radius / 2.85,
        particleAge: 60,
        speed: this._radius / 20,
        emitAmountPerTick: 3,
        spawnParticlesOnEdge: true,
      }
    );
  }

  public draw() {
    this._emitter.tick(0.5);
    this._emitter.draw();

    const scaleX = this._canvasCtx.canvas.width / currentRoom.settings.arenaSize;
    const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;

    this._canvasCtx.moveTo(
      this._position.x * scaleX,
      this._position.y * scaleY
    );
    this._canvasCtx.fillStyle = this._color.toString()
    this._canvasCtx.beginPath();
    this._canvasCtx.arc(
      this._position.x * scaleX,
      this._position.y * scaleY,
      this._radius * scaleX,
      0,
      2 * Math.PI
    );
    this._canvasCtx.fill();
    this._canvasCtx.closePath();

    this.drawSVG();
    this._emitter.emitTime = Infinity;
  }

  private drawSVG() {
    const scaleX = this._canvasCtx.canvas.width / currentRoom.settings.arenaSize;
    const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;
    // this._canvasCtx.fillStyle = "#ffffff";
    const imageScaleFactor = 0.6;

    const aspectRatio = this._img.width / this._img.height;

    // Determine the scaled dimensions based on the aspect ratio
    let drawWidth = this._radius * 2 * imageScaleFactor * scaleX;
    let drawHeight = (this._radius * 2 * imageScaleFactor * scaleX) / aspectRatio;

    // Ensure the image fits within the given radius
    if (drawHeight > this._radius * 2 * imageScaleFactor * scaleX) {
      drawHeight = this._radius * 2 * imageScaleFactor * scaleX;
      drawWidth = drawHeight * aspectRatio;
    }

    this._canvasCtx.drawImage(
      this._img,
      this._position.x * scaleX - drawWidth / 2,
      this._position.y * scaleY - drawHeight / 2,
      drawWidth,
      drawHeight
    );
  }

  public get id(): number {
    return this._id;
  }

  public get position(): Vector {
    return this._position;
  }

  public get radius(): number {
    return this._radius;
  }

  public get type(): PowerupType {
    return this._type;
  }

  public get color(): TinyColor {
    return this._color;
  }

  public get duration(): number {
    return this._duration;
  }

  toJSON() {
    return {
      id: this._id,
      position: { x: this.position.x, y: this.position.y },
      color: this._color.toString(),
      type: this._type,
      radius: this._radius,
      duration: this._duration
    };
  }

  public static fromMessagePowerup(
    json: MessagePowerup,
    canvasCtx: CanvasRenderingContext2D
  ): Powerup {
    return new Powerup(
      json.powerup.id,
      new Vector(json.powerup.position.x, json.powerup.position.y),
      canvasCtx,
      new TinyColor(json.powerup.color),
      json.powerup.type,
      json.powerup.duration
    );
  }
}
