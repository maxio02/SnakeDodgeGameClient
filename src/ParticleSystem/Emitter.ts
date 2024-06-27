import { Vector } from "vector2d";
import Particle, { shape } from "./Particle";

interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface EmitterOptions {
    emitInterval?: number;
    emitAmountPerTick?: number;
    particleSize?: number;
    speed?: number;
    particleShape?: shape;
    color?: Color;
    doFadeColor?: boolean;
    doFadeSize?: boolean;
    fadeDirection?: 'normal' | 'reverse';
    particleAge?: number;
    emitTimeMillis?: number;
    drawEmitterZone?: boolean;
    emitDirection?: Vector;
    spreadAngle?: number;
    spawnParticlesOnEdge?: boolean;
}


export default abstract class Emitter{
    public position: Vector;
    public emitDirection: Vector;

    protected _aliveParticles: Particle[] = [];
    protected _emitInterval: number;
    protected _emitAmountPerTick: number;
    protected _particleShape: shape;
    protected _particleSize: number;
    protected _speed: number;
    protected _color: Color;
    protected _doFadeColor: boolean;
    protected _fadeDirection: 'normal' | 'reverse';
    protected _doFadeSize: boolean;
    protected _particleMaxAge: number;
    protected _canvasCtx: CanvasRenderingContext2D;
    protected _remainingEmitTimeMillis: number;
    protected _spreadAngle: number;
    protected _ticks: number = 0;
    protected _drawEmitterZone: boolean;
    protected _spawnParticlesOnEdge: boolean;

    public constructor(
    position: Vector,
        canvasCtx: CanvasRenderingContext2D,
        {
            emitInterval = 2,
            emitAmountPerTick = 5,
            particleSize = 10,
            speed = 2,
            particleShape = 'circle',
            color = { r: 255, g: 255, b: 255, a: 1 },
            doFadeColor = true,
            doFadeSize = true,
            fadeDirection = 'normal',
            particleAge = 50,
            emitTimeMillis = 0,
            drawEmitterZone = false,
            emitDirection = new Vector(0, 0),
            spreadAngle = Math.PI*2,
            spawnParticlesOnEdge = false,
        }: EmitterOptions
    ) {
        this.position = position;
        this._canvasCtx = canvasCtx;
        this._emitInterval = emitInterval;
        this._emitAmountPerTick = emitAmountPerTick;
        this._particleSize = particleSize;
        this._speed = speed;
        this._particleShape = particleShape;
        this._color = color;
        this._doFadeColor = doFadeColor;
        this._doFadeSize = doFadeSize;
        this._fadeDirection = fadeDirection;
        this._particleMaxAge = particleAge;
        this._spreadAngle = spreadAngle;
        this._remainingEmitTimeMillis = emitTimeMillis;
        this.emitDirection = emitDirection;
        this._drawEmitterZone = drawEmitterZone;
        this._spawnParticlesOnEdge = spawnParticlesOnEdge;
    }

    public abstract tick(dt: number): void;

    public abstract draw(): void;

    set emitTime(newEmitTime: number) {
        this._remainingEmitTimeMillis = newEmitTime;
    }


}