import { Vector } from "vector2d";
import Particle from "./Particle";
import { getBiasedRandomDirection, getPositionInRectangle, getQualityMultiplier } from './ParticleSystemUtils';
import Emitter, { EmitterOptions } from "./Emitter";
import { currentRoom } from "../MenuManager/login";


export default class RectangleEmitter extends Emitter{
    private _width: number;
    private _height: number;
    private _rotation: number;
    private _qualityMultiplier: number;

    public constructor(
        width: number,
        height: number,
        position: Vector,
        rotation: number,
        canvasCtx: CanvasRenderingContext2D,
        emitterOptions: EmitterOptions
    ) {
        super(position, canvasCtx, emitterOptions);
        this._width = width;
        this._height = height;
        this._rotation = rotation;

        this._qualityMultiplier = getQualityMultiplier();
    }

    public tick(dt: number) {
        if ((this._remainingEmitTimeMillis + this._particleMaxAge) < 0) return;

        this._remainingEmitTimeMillis -= dt;

        //emit new particles if the emitter is "alive"
        if (this._ticks % this._emitInterval === 0 && this._remainingEmitTimeMillis > 0) {

            const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;
            for (let i = 0; i < Math.floor(this._emitAmountPerTick * this._qualityMultiplier); i++) {
                const localPos = getPositionInRectangle(this._width, this._height).subtract(new Vector(this._width / 2, this._height / 2));
                const rotatedPos = localPos.rotate(this._rotation);

                this._aliveParticles.push(new Particle(
                    this.position.clone().add(rotatedPos) as Vector,
                    getBiasedRandomDirection(this.emitDirection, this._spreadAngle).rotate(this._rotation),
                    this._rotation,
                    this._particleSize * scaleY,
                    this._speed,
                    this._particleShape,
                    this._color,
                    this._canvasCtx,
                    this._particleMaxAge,
                    this._doFadeColor,
                    this._doFadeSize,
                    this._fadeDirection
                ));
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
            let color = this._color.toRgb();
            const scaleX = this._canvasCtx.canvas.width / currentRoom.settings.arenaSize;
            const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;

            this._canvasCtx.save();
            this._canvasCtx.translate(this.position.x * scaleX, this.position.y * scaleY);
            this._canvasCtx.rotate(this._rotation);

            this._canvasCtx.fillStyle = `rgba(${color.r},${color.g},${color.b}, ${Math.min(0.2, ((this._remainingEmitTimeMillis + this._particleMaxAge) / this._particleMaxAge / 5))})`;
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(-this._width / 2 * scaleX, -this._height / 2 * scaleY, this._width * scaleX, this._height * scaleY);
            this._canvasCtx.fill();
            this._canvasCtx.closePath();

            this._canvasCtx.restore();
        }

        this._aliveParticles.forEach(particle => {
            particle.draw();
        });
    }

    set emitTime(newEmitTime: number) {
        this._remainingEmitTimeMillis = newEmitTime;
    }

    set rotation(angle: number) {
        this._rotation = angle ;
    }

    get rotation(): number {
        return this._rotation;
    }

    set height(height: number) {
        this._height = height ;
    }

    get height(): number {
        return this._height;
    }

    set width(width: number) {
        this._width = width ;
    }

    get width(): number {
        return this._width;
    }
}
