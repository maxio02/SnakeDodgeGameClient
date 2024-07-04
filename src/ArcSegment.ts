import { drawArc, drawArrow, drawDot } from "./Drawer";
import * as Vec2D from 'vector2d';
import Segment from "./Segment";
import { gameCanvasCtx } from "./index";

export default class ArcSegment extends Segment {


    public center: Vec2D.Vector;
    public radius: number;
    public startAngle: number;
    public endAngle: number;
    private _counterClockwise: boolean;
    public isCollidable: boolean;


    constructor(center: Vec2D.Vector, radius: number, startAngle: number, endAngle: number, counterClockwise: boolean, isCollidable: boolean) {
        super();
        this.center = center;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this._counterClockwise = counterClockwise;
        this.isCollidable = isCollidable;
    }


    draw(context: CanvasRenderingContext2D, color: string): void {
        const scaleX = context.canvas.width / 2000;
        const scaleY = context.canvas.height / 2000;

        context.lineCap = "round";
        context.strokeStyle = color;
        if (this.isCollidable === true) {
            context.beginPath();
            context.arc(this.center.x * scaleX, this.center.y * scaleY, this.radius * Math.min(scaleX, scaleY), this.startAngle, this.endAngle, this._counterClockwise);
            context.stroke();
            context.closePath();
        }
    }

    drawDebug(context: CanvasRenderingContext2D, color: string): void {
        let tangent_angle = this._counterClockwise ? - Math.PI : Math.PI;

        tangent_angle += this.endAngle;
        context.lineCap = "round";
        drawDot(this.center.x, this.center.y, 5, '#000000');
        drawArrow(context, new Vec2D.Vector(this.endPoint.x, this.endPoint.y), new Vec2D.Vector(this.endPoint.x + this.radius * Math.cos(tangent_angle), this.endPoint.y + this.radius * Math.sin(tangent_angle)), '#bbbbbb', 12);
        drawArc(this.center.x, this.center.y, this.radius, 0, 0, false);

    }

    get endPoint(): Vec2D.Vector {
        return new Vec2D.Vector(
            this.center.x + this.radius * Math.cos(this.endAngle),
            this.center.y + this.radius * Math.sin(this.endAngle)
        );
    }

    get penpendicularEndAngle(): number {
        return this.isCounterClockwise ? this.endAngle - Math.PI / 2 : this.endAngle + Math.PI / 2;
    }

    get penpendicularStartAngle(): number {
        return this.isCounterClockwise ? this.startAngle - Math.PI / 2 : this.startAngle + Math.PI / 2;
    }

    isCounterClockwise(): boolean {
        return this._counterClockwise;
    }

    getContinuingSegment(transform: Vec2D.Vector): Segment {
        return new ArcSegment(this.center.clone().add(transform) as Vec2D.Vector, this.radius, this.endAngle, this.endAngle, this._counterClockwise, this.isCollidable);
    }
}