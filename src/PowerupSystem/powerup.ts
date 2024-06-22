import { Vector } from "vector2d";
import Emitter from "../ParticleSystem/Emitter";
import { hexToRgb } from "../ParticleSystem/ParticleSystemUtils";

export enum PowerupType {
  SpeedUp,
  SpeedDown,
  Bomb,
  FlipButtons,
  Invisibility,
  PortalWalls,
}

const SVG_PATHS: { [key in PowerupType]: string } = {
  [PowerupType.SpeedUp]: "../assets/powerups/speedup.svg",
  [PowerupType.SpeedDown]: "../assets/powerups/speeddown.svg",
  [PowerupType.Bomb]: "../assets/powerups/bomb.svg",
  [PowerupType.FlipButtons]: "../assets/powerups/flipbuttons.svg",
  [PowerupType.Invisibility]: "../assets/powerups/invisibility.svg",
  [PowerupType.PortalWalls]: "../assets/powerups/portalwalls.svg",
};

export default class Powerup {
  private _position: Vector;
  private _canvasCtx: CanvasRenderingContext2D;
  private _color: string;
  private _radius: number = 20;
  private _type: PowerupType;
  private _img: HTMLImageElement;
  private _emitter: Emitter;

  constructor(
    position: Vector,
    canvasCtx: CanvasRenderingContext2D,
    color: string,
    type: PowerupType,
  ) {
    this._position = position;
    this._canvasCtx = canvasCtx;
    this._color = color;
    this._type = type;
    this._img = new Image();
    this._img.src = SVG_PATHS[this._type];
    this._emitter = new Emitter(this._position, this._canvasCtx, {emitterSize: this._radius*0.6,
        color: {...hexToRgb(this._color), a: 0.8 },
        particleSize: this._radius/ 2.85,
        particleAge:60,
        speed: this._radius/20,
        emitAmountPerTick: 3,
        spawnParticlesOnEdge: true})
  }

  public draw() {
    this._emitter.tick(0.5);
    this._emitter.draw();

    const scaleX = this._canvasCtx.canvas.width / 2000;
    const scaleY = this._canvasCtx.canvas.height / 2000;

    this._canvasCtx.moveTo(
      this._position.x * scaleX,
      this._position.y * scaleY
    );
    this._canvasCtx.fillStyle = this._color;
    this._canvasCtx.beginPath();
    this._canvasCtx.arc(
      this._position.x * scaleX,
      this._position.y * scaleY,
      this._radius,
      0,
      2 * Math.PI
    );
    this._canvasCtx.fill();
    this._canvasCtx.closePath();

    this.drawSVG();
    this._emitter.emitTime = Infinity;

  }

  private drawSVG() {
    const scaleX = this._canvasCtx.canvas.width / 2000;
    const scaleY = this._canvasCtx.canvas.height / 2000;
    // this._canvasCtx.fillStyle = "#ffffff";
    const scaleFactor = 0.6;
    this._canvasCtx.drawImage(
      this._img,
      this._position.x * scaleX - this._radius * scaleFactor,
      this._position.y * scaleY - this._radius * scaleFactor,
      this._radius * 2 * scaleFactor,
      this._radius * 2 * scaleFactor
    );
  }
}
