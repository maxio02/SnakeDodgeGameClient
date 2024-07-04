import { Vector } from "vector2d";
import Segment from "./Segment";

export default class LineSegment extends Segment {

    public startPoint: Vector;
    public endPoint: Vector;
    public endAngle: number;
    public isCollidable: boolean = true;

    constructor(start: Vector, end: Vector, isCollidable: boolean, angle?: number) {
        super();
        this.startPoint = start;
        this.endPoint = end;
        this.isCollidable = isCollidable;
        this.endAngle = angle;

    }

    draw(context: CanvasRenderingContext2D, color: string): void {
        const scaleX = context.canvas.width / 2000;
        const scaleY = context.canvas.height / 2000;

        context.lineCap = "round";
        context.strokeStyle = color;
        if (this.isCollidable === true) {
            context.beginPath();
            context.moveTo(this.startPoint.x * scaleX, this.startPoint.y * scaleY);
            context.lineTo(this.endPoint.x * scaleX, this.endPoint.y * scaleY);
            context.stroke();
            context.closePath();
        }
    }

    get length(): number {
        return Math.sqrt((this.startPoint.x - this.endPoint.x) ** 2 + (this.startPoint.y - this.endPoint.y) ** 2);
    }

    public getContinuingSegment(transform: Vector): Segment {
        const transformedEndpoint = this.endPoint.clone().add(transform) as Vector;
        return new LineSegment(
            transformedEndpoint,
            transformedEndpoint,
            this.isCollidable,
            this.endAngle
        );
    }

}