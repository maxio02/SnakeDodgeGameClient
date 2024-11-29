import { Vector } from "vector2d";
import { PowerupType } from "./powerup";
import { TinyColor } from "@ctrl/tinycolor";
import RectangleEmitter from "../ParticleSystem/RectangularEmitter";
import { currentRoom } from "../MenuManager/login";

export enum EaseFunction {
  easeOutQuint,
  easeOutCubic,
  linear,
}
export default class Laser {
  public position: Vector;
  private _canvasCtx: CanvasRenderingContext2D;
  private _laserEmitters: RectangleEmitter[] = [];
  private _previewEmitter: RectangleEmitter;
  private _color: TinyColor;
  private _growSpeed: number;
  private _easeFunction: EaseFunction;
  private _maxLength: number;
  private _previewAnimationProgress: number;
  private _laserAnimationProgress: number;
  private _angle: number;
  constructor(
    position: Vector,
    angle: number,
    canvasCtx: CanvasRenderingContext2D,
    easeFunction: EaseFunction = EaseFunction.easeOutQuint
  ) {
    this.position = position;
    this._canvasCtx = canvasCtx;
    this._laserAnimationProgress = 0;
    this._previewAnimationProgress = 0;
    this._easeFunction = easeFunction;
    this._maxLength = currentRoom.settings.arenaSize * Math.sqrt(2);
    this._angle = angle;
    let emitOnEdge = false;
    let spawnAnimationDuration = 0;
    let spawnAmount = 0;
    let particleAge = 0;
    let emitTime = 0;

    this._color = new TinyColor(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--powerup-color-laser"
      )
    );
    emitOnEdge = false;
    spawnAnimationDuration = 0.8;
    spawnAmount = 6;
    particleAge = 70;
    emitTime = 4000;

    this._growSpeed = 1 / 50 / spawnAnimationDuration;

    let emitDirections = [new Vector(-1, 0), new Vector(1, 0)];

    this._previewEmitter = new RectangleEmitter(
      10,
      this._maxLength,
      this.position,
      this._angle,
      this._canvasCtx,
      {
        color: new TinyColor(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--powerup-color-bomb-shadow"
          )
        ),
        emitTimeMillis: 2000,
        emitInterval: 0,
        emitAmountPerTick: 0,
        drawEmitterZone: true,
      }
    );

    for (let i = 0; i < 2; i++) {
      this._laserEmitters.push(
        new RectangleEmitter(
          50,
          0,
          this.position,
          this._angle,
          this._canvasCtx,
          {
            color: this._color,
            particleShape: "square",
            particleSize: 10,
            emitTimeMillis: emitTime,
            particleAge: particleAge,
            speed: 0.8 / 20,

            emitInterval: 1,
            emitAmountPerTick: spawnAmount,

            drawEmitterZone: true,

            spreadAngle: Math.PI / 6,
            emitDirection: emitDirections[i],
          }
        )
      );
    }
  }

  public draw() {
    if (this._previewAnimationProgress < 1) {
      this._previewAnimationProgress = Math.min(
        this._previewAnimationProgress + this._growSpeed / 2,
        1
      );

      this._previewEmitter.color.setAlpha(
        ((Math.sin(this._previewAnimationProgress * 15) + 1) / 2) * 0.4
      );
    } else if (this._laserAnimationProgress < 1) {
      this._laserAnimationProgress = Math.min(
        this._laserAnimationProgress + this._growSpeed,
        1
      );

      this._laserEmitters.forEach((emitter) => {
        switch (this._easeFunction) {
          case EaseFunction.easeOutQuint:
            emitter.height =
              this._maxLength * easeOutQuint(this._laserAnimationProgress);
            break;
          case EaseFunction.easeOutCubic:
            emitter.height =
              this._maxLength * easeOutCubic(this._laserAnimationProgress);
            break;
          case EaseFunction.linear:
            emitter.height =
              this._maxLength * linear(this._laserAnimationProgress);
            break;
        }
      });
    }
    if (this._previewAnimationProgress < 1) {
      this._previewEmitter.tick(20);
      this._previewEmitter.draw();
    } else {
      this._laserEmitters.forEach((emitter) => {
        emitter.tick(20);
        emitter.draw();
      });
    }
  }
}

function easeOutQuint(x: number): number {
  return 1 - Math.pow(1 - x, 5);
}

function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

function linear(x: number): number {
  return x;
}
