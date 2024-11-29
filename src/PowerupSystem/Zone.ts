import { Vector } from 'vector2d';
import { PowerupType } from './powerup';
import CircularEmitter from '../ParticleSystem/CircularEmitter';
import { TinyColor } from '@ctrl/tinycolor';

export enum ZoneType {
    Bomb,
    BombShadowInner,
    BombShadowOuter,
    Confusion
  }

export enum EaseFunction {
    easeOutQuint,
    easeOutCubic,
    linear
}
export default class Zone {
    public position: Vector;
    private _currentRadius: number;
    private _maxRadius: number;
    public type: ZoneType;
    private _canvasCtx: CanvasRenderingContext2D;
    private _emitter: CircularEmitter;
    private _color: TinyColor;
    private _growSpeed: number;
    private _easeFunction: EaseFunction;
    private _spawnAnimationDuration: number;

    private _animationProgress: number;
    constructor(
        position: Vector,
        canvasCtx: CanvasRenderingContext2D,
        radius: number,
        spawnAnimationDuration: number,
        type: ZoneType,
        easeFunction : EaseFunction = EaseFunction.linear
        ){

        
        this.position = position;
        this._canvasCtx = canvasCtx;
        this._maxRadius = radius;
        this._currentRadius = 0;
        this.type = type;
        this._animationProgress = 0;
        this._easeFunction = easeFunction;
        this._spawnAnimationDuration = spawnAnimationDuration
        let emitOnEdge = false;
        let spawnAmount = 0;
        let particleAge = 0;
        let emitTime = 0;
        let speed = 0;
        switch (type) {
            case ZoneType.Bomb:
                this._color = new TinyColor(getComputedStyle(document.documentElement).getPropertyValue('--powerup-color-bomb'));
                emitOnEdge = true;
                spawnAmount = 4;
                particleAge = 140;
                emitTime = 3000;
                speed = 0.8/20;
                break;

            case ZoneType.BombShadowOuter:
            case ZoneType.BombShadowInner:
                this._color = new TinyColor(getComputedStyle(document.documentElement).getPropertyValue('--powerup-color-bomb-shadow'));
                emitOnEdge = true;
                spawnAmount = 0;
                particleAge = 140;
                emitTime = 3000;
                speed = 0.8/20;
                break;

            case ZoneType.Confusion:
                this._color = new TinyColor(getComputedStyle(document.documentElement).getPropertyValue('--powerup-color-confusion'));
                emitOnEdge = false;
                spawnAmount = 2;
                particleAge = 70;
                emitTime = 10000;
                speed = 0.8/40;
                break;

            default:
                console.log("this should never happen!")
                break;
        }
        this._growSpeed = 1/50/this._spawnAnimationDuration;

        this._emitter = new CircularEmitter(
            this._currentRadius,
            this.position,
            this._canvasCtx,
            {
              color: this._color,
              spawnParticlesOnEdge: emitOnEdge,
              particleShape: 'square',
              particleSize: 10,
              emitTimeMillis: emitTime,
              particleAge: particleAge,
              speed: speed,

              emitInterval: 1,
              emitAmountPerTick: spawnAmount,
              
              drawEmitterZone: true,

              spreadAngle: Math.PI/6,
              emitDirection: new Vector(0,-1)
            }
        )
    }

    public draw() {
        if (this._animationProgress < 1){
            this._animationProgress = Math.min(this._animationProgress + this._growSpeed, 1);
            switch(this._easeFunction){
                case EaseFunction.easeOutQuint:
                    this._currentRadius = this._maxRadius * easeOutQuint(this._animationProgress);
                    break;
                case EaseFunction.easeOutCubic:
                    this._currentRadius = this._maxRadius * easeOutCubic(this._animationProgress);
                    break;
                case EaseFunction.linear:
                    this._currentRadius = this._maxRadius * linear(this._animationProgress);
                    break;
            }
            
            this._emitter.radius = this._currentRadius;
        }
        
        this._emitter.tick(20);
        this._emitter.draw();
    }

    toJSON() {
        return {
            position: this.position,
            radius: this._currentRadius,
            type: this.type
        };
    }

    public get emitter(){
        return this._emitter;
    }

    
}

function easeOutQuint(x: number): number {
    // console.log(x, 1 - Math.pow(1 - x, 5));
    return 1 - Math.pow(1 - x, 5);
}

function easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
}

function linear(x: number): number{
    return x;
}

