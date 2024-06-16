import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import LineSegment from "./LineSegment";
import Segment from "./Segment";
import Emitter from "./ParticleSystem/Emitter";
import { hexToRgb } from "./ParticleSystem/ParticleSystemUtils";

export default class Snake {
    public segments: Segment[] = [];
    private color: string;
    public isAlive: boolean = true;
    public turnRadius: number = 60;
    private emitter: Emitter | null = null;
    private canvasCtx: CanvasRenderingContext2D;


    constructor(startPos: LineSegment, color: string, canvasCtx: CanvasRenderingContext2D) {
        this.addSegment(startPos);
        this.color = color;
        this.canvasCtx = canvasCtx
    }
    addSegment(segment: Segment) {
        this.segments.push(segment);
    }

    get head(): Segment {
        return this.segments.slice(-1).pop();
    }

    draw() {
        const scaleX = this.canvasCtx.canvas.width / 2000;
        const scaleY = this.canvasCtx.canvas.height / 2000;


        this.canvasCtx.lineWidth = 12 * Math.min(scaleX, scaleY);
        //TODO fix this to be a single path
        // context.beginPath();

        this.segments.forEach((segment, index) => {
            segment.draw(this.canvasCtx, this.color);

            //draw a dot at the head, this is usefull if the segment is invisible
            if (this.head == segment) {
                this.canvasCtx.beginPath();
                this.canvasCtx.arc(segment.endPoint.x * scaleX, segment.endPoint.y * scaleY, 0.5 * Math.min(scaleX, scaleY), 0, 2 * Math.PI);
                this.canvasCtx.stroke();
                this.canvasCtx.closePath();
            }
        });
        // context.stroke();
    }

kill() {
    console.log("SNAKE DEAD")
    this.isAlive = false;
    this.emitter = new Emitter(this.head.endPoint, 1, 7, 4, 'circle', { ...hexToRgb(this.color), a: 1 }, this.canvasCtx, true, true, 70, 4);
}

updateEmitter(dt: number) {
    if (this.emitter) {
        this.emitter.tick(dt);
        this.emitter.draw();
    }
}
    
}