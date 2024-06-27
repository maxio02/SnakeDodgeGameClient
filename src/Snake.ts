import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import LineSegment from "./LineSegment";
import Segment from "./Segment";
import CircleEmitter from "./ParticleSystem/CircleEmitter";
import { hexToRgb } from "./ParticleSystem/ParticleSystemUtils";

export default class Snake {
    public segments: Segment[] = [];
    private _color: string;
    public isAlive: boolean = true;
    public turnRadius: number = 60;
    private _emitter: CircleEmitter | null = null;
    private _canvasCtx: CanvasRenderingContext2D;


    constructor(startPos: LineSegment, color: string, canvasCtx: CanvasRenderingContext2D) {
        this.addSegment(startPos);
        this._color = color;
        this._canvasCtx = canvasCtx;
        this._emitter = new CircleEmitter(0, this.head.endPoint, this._canvasCtx, {emitInterval: 2,
            emitAmountPerTick: 3,
            particleSize: 7,
            speed: 4,
            color: { ...hexToRgb(this._color), a: 1 },
        })
    }
    addSegment(segment: Segment) {
        this.segments.push(segment);
    }

    get head(): Segment {
        return this.segments.slice(-1).pop();
    }

    draw() {
        const scaleX = this._canvasCtx.canvas.width / 2000;
        const scaleY = this._canvasCtx.canvas.height / 2000;


        this._canvasCtx.lineWidth = 12 * Math.min(scaleX, scaleY);
        //TODO fix this to be a single path

        this.segments.forEach((segment, index) => {
            segment.draw(this._canvasCtx, this._color);

            //draw a dot at the head, this is useful if the segment is invisible
            if (this.head === segment) {
                this._canvasCtx.beginPath();
                this._canvasCtx.arc(segment.endPoint.x * scaleX, segment.endPoint.y * scaleY, 0.5 * Math.min(scaleX, scaleY), 0, 2 * Math.PI);
                this._canvasCtx.stroke();
                this._canvasCtx.closePath();
            }
        });
    }

kill() {
    this.isAlive = false;
    this._emitter.position = this.head.endPoint
    this._emitter.emitTime = 10;
}

updateEmitter(dt: number) {
    if (this._emitter) {
        this._emitter.tick(dt);
        this._emitter.draw();
    }
}
    
}