import { Vector } from "vector2d";
import Particle, { shape } from "./Particle";
import { getBiasedRandomDirection, getPositionInCircle, getRandomDirection, hexToRgb, hexToRgbA } from './ParticleSystemUtils';
import Emitter, { EmitterOptions } from "./Emitter";
import { currentRoom } from "../MenuManager/login";


export default class CircularEmitter extends Emitter{
    private _emitterRadius: number;

    public constructor(
        emitterRadius: number,
        position: Vector,
        canvasCtx: CanvasRenderingContext2D,
        emitterOptions: EmitterOptions
    ){
        super(position, canvasCtx, emitterOptions);
        this._emitterRadius = emitterRadius;
    }

    public tick(dt: number) {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0) return;

        this._remainingEmitTimeMillis -= dt;

        //emit new particles if the emitter is "alive"
        if (this._ticks % this._emitInterval === 0 && this._remainingEmitTimeMillis > 0) {

            const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;
            for (let i = 0; i < this._emitAmountPerTick; i++) {
                this._aliveParticles.push(new Particle(this.position.clone().add(getPositionInCircle(this._emitterRadius, this._spawnParticlesOnEdge)) as Vector,
                    getBiasedRandomDirection(this.emitDirection, this._spreadAngle),
                    this._particleSize * scaleY,
                    this._speed,
                    this._particleShape,
                    { ...hexToRgbA(this._color)},
                    this._canvasCtx,
                    this._particleMaxAge,
                    this._doFadeColor,
                    this._doFadeSize,
                    this._fadeDirection));
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
            let color = hexToRgbA(this._color)
            const scaleX = this._canvasCtx.canvas.width / currentRoom.settings.arenaSize;
            const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;
            
            this._canvasCtx.moveTo(this.position.x * scaleX, this.position.y * scaleY);
            this._canvasCtx.fillStyle = `rgba(${color.r},${color.g},${color.b}, ${Math.min(0.2, ((this._remainingEmitTimeMillis + this._particleMaxAge) / this._particleMaxAge / 5))})`;
            this._canvasCtx.beginPath();
            this._canvasCtx.arc(this.position.x * scaleX, this.position.y * scaleY, this._emitterRadius * Math.min(scaleX, scaleY), 0, 2 * Math.PI);
            this._canvasCtx.fill();
            this._canvasCtx.closePath();
        }

        this._aliveParticles.forEach(particle => {
            particle.draw()
        });
    }

    get emitTime() {
        return this._remainingEmitTimeMillis + this._particleMaxAge;
    }

    set emitTime(newEmitTime: number) {
        this._remainingEmitTimeMillis = newEmitTime;
    }

    set radius(newRadius: number) {
        this._emitterRadius = newRadius;
    }

}