import { Vector } from 'vector2d';
import { PowerupType } from './powerup';
import Emitter from '../ParticleSystem/Emitter';
import CircularEmitter from '../ParticleSystem/CircularEmitter';
export default class Zone {
    public position: Vector;
    private _currentRadius: number;
    private _maxRadius: number;
    private _type: PowerupType;
    private _canvasCtx: CanvasRenderingContext2D;
    private _emitter: CircularEmitter;
    private _color: string;
    private _growSpeed: number;

    private _animationProgress: number;
    constructor(
        position: Vector,
        canvasCtx: CanvasRenderingContext2D,
        radius: number,
        type: PowerupType
        ){

        
        this.position = position;
        this._canvasCtx = canvasCtx;
        this._maxRadius = radius;
        this._currentRadius = 0;
        this._type = type;
        this._animationProgress = 0;
        let emitOnEdge = false;
        let spawnAnimationDuration = 0;
        let spawnAmount = 0;
        let particleAge = 0;
        let emitTime = 0;
        switch (type) {
            case PowerupType.Bomb:
                this._color = getComputedStyle(document.documentElement).getPropertyValue('--powerup-color-bomb');
                emitOnEdge = true;
                spawnAnimationDuration = 3;
                spawnAmount = 4;
                particleAge = 140;
                emitTime = 3000;
                break;
            case PowerupType.Confusion:
                this._color = getComputedStyle(document.documentElement).getPropertyValue('--powerup-color-confusion');
                emitOnEdge = false;
                spawnAnimationDuration = 0.5;
                spawnAmount = 2;
                particleAge = 70;
                emitTime = 10000;
                break;
            default:
                console.log("this should never happen!")
                break;
        }
        this._growSpeed = 1/50/spawnAnimationDuration;

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
              speed: 0.8/40,

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
            this._currentRadius = this._maxRadius * easeOutCubic(this._animationProgress);
            this._emitter.radius = this._currentRadius;
        }
        
        this._emitter.tick(20);
        this._emitter.draw();
    }

    toJSON() {
        return {
            position: this.position,
            radius: this._currentRadius,
            type: this._type
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