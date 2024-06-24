import { Vector } from "vector2d";
import Particle, { shape } from "./Particle";
import { getBiasedRandomDirection, getPositionInCircle, getRandomDirection } from "./ParticleSystemUtils";

interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface EmitterOptions {
    emitInterval?: number;
    emitAmountPerTick?: number;
    particleSize?: number;
    emitterSize?: number;
    speed?: number;
    particleShape?: shape;
    color?: Color;
    doFadeColor?: boolean;
    doFadeSize?: boolean;
    particleAge?: number;
    emitTimeMillis?: number;
    drawEmitterZone?: boolean;
    emitDirection?: Vector;
    spreadAngle?: number;
    spawnParticlesOnEdge?: boolean;
}


export default class Emitter {
    public position: Vector;
    public emitterSize: number;
    public emitDirection: Vector;

    private _aliveParticles: Particle[] = [];
    private _emitInterval: number;
    private _emitAmountPerTick: number;
    private _particleShape: shape;
    private _particleSize: number;
    private _speed: number;
    private _color: Color;
    private _doFadeColor: boolean;
    private _doFadeSize: boolean;
    private _particleMaxAge: number;
    private _canvasCtx: CanvasRenderingContext2D;
    private _remainingEmitTimeMillis: number;
    private _spreadAngle: number;
    private _ticks: number = 0;
    private _drawEmitterZone: boolean;
    private _spawnParticlesOnEdge: boolean;

    public constructor(
        position: Vector,
        canvasCtx: CanvasRenderingContext2D,
        {
            emitInterval = 2,
            emitAmountPerTick = 5,
            emitterSize = 0,
            particleSize = 10,
            speed = 2,
            particleShape = 'circle',
            color = { r: 255, g: 255, b: 255, a: 1 },
            doFadeColor = true,
            doFadeSize = true,
            particleAge = 50,
            emitTimeMillis = 0,
            drawEmitterZone = false,
            emitDirection = new Vector(0, 0),
            spreadAngle = Math.PI*2,
            spawnParticlesOnEdge = false
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
        this._particleMaxAge = particleAge;
        this._spreadAngle = spreadAngle;
        this._remainingEmitTimeMillis = emitTimeMillis;
        this.emitDirection = emitDirection;
        this.emitterSize = emitterSize;
        this._drawEmitterZone = drawEmitterZone;
        this._spawnParticlesOnEdge = spawnParticlesOnEdge;
    }

    public tick(dt: number) {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0) return;

        this._remainingEmitTimeMillis -= dt;

        //emit new particles if the emitter is "alive"
        if (this._ticks % this._emitInterval === 0 && this._remainingEmitTimeMillis > 0) {

            const scaleY = this._canvasCtx.canvas.height / 2000;
            for (let i = 0; i < this._emitAmountPerTick; i++) {
                this._aliveParticles.push(new Particle(this.position.clone().add(getPositionInCircle(this.emitterSize, this._spawnParticlesOnEdge)) as Vector,
                    getBiasedRandomDirection(this.emitDirection, this._spreadAngle),
                    this._particleSize * scaleY,
                    this._speed,
                    this._particleShape,
                    { ...this._color },
                    this._canvasCtx,
                    this._particleMaxAge,
                    this._doFadeColor,
                    this._doFadeSize));
            }
        }

        //move all the particles forward in time
        this._aliveParticles.forEach(particle => {
            particle.tick(dt)
        });

        //remove particles that have reached the end of their lifespan
        this._aliveParticles = this._aliveParticles.filter(particle => particle.age > 0);


        this._ticks++;
    }

    public draw() {

        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0) return;

        if (this._drawEmitterZone === true) {
            const scaleX = this._canvasCtx.canvas.width / 2000;
            const scaleY = this._canvasCtx.canvas.height / 2000;
            
            this._canvasCtx.moveTo(this.position.x * scaleX, this.position.y * scaleY);
            this._canvasCtx.fillStyle = `rgba(${this._color.r},${this._color.g}, ${this._color.b}, ${Math.min(0.2, ((this._remainingEmitTimeMillis + this._particleMaxAge) / this._particleMaxAge / 5))})`;
            this._canvasCtx.beginPath();
            this._canvasCtx.arc(this.position.x * scaleX, this.position.y * scaleY, this.emitterSize, 0, 2 * Math.PI);
            this._canvasCtx.fill();
            this._canvasCtx.closePath();
        }

        this._aliveParticles.forEach(particle => {
            particle.draw()
        });
    }

    set emitTime(newEmitTime: number) {
        this._remainingEmitTimeMillis = newEmitTime;
    }

}