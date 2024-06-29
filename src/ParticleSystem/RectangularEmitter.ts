import { Vector } from "vector2d";
import Particle, { shape } from "./Particle";
import { getBiasedRandomDirection, getPositionInCircle, getPositionInRectangle, getRandomDirection, hexToRgb, hexToRgbA } from './ParticleSystemUtils';
import Emitter, { EmitterOptions } from "./Emitter";


export default class RectangleEmitter extends Emitter{
    private _width;
    private _height;

    public constructor(
        width: number,
        height: number,
        position: Vector,
        canvasCtx: CanvasRenderingContext2D,
        emitterOptions: EmitterOptions
    ){
        super(position, canvasCtx, emitterOptions);
        this._width = width;
        this._height = height;
    }

    public tick(dt: number) {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0) return;

        this._remainingEmitTimeMillis -= dt;

        //emit new particles if the emitter is "alive"
        if (this._ticks % this._emitInterval === 0 && this._remainingEmitTimeMillis > 0) {

            const scaleY = this._canvasCtx.canvas.height / 2000;
            for (let i = 0; i < this._emitAmountPerTick; i++) {
                this._aliveParticles.push(new Particle(this.position.clone().add(getPositionInRectangle(this._width, this._height).subtract(new Vector(this._width/2, this._height/2))) as Vector,
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
            const scaleX = this._canvasCtx.canvas.width / 2000;
            const scaleY = this._canvasCtx.canvas.height / 2000;
            
            this._canvasCtx.moveTo((this.position.x - this._width/2) * scaleX, (this.position.y - this._height/2) * scaleY);
            this._canvasCtx.fillStyle = `rgba(${hexToRgb(this._color)}, ${Math.min(0.2, ((this._remainingEmitTimeMillis + this._particleMaxAge) / this._particleMaxAge / 5))})`;
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(this.position.x - this._width/2, this.position.y - this._height/2, this._width, this._height);
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