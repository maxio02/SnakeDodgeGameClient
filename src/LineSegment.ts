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
        // context.strokeStyle = '#ff00ffff'
        context.strokeStyle = color;
        context.lineCap = "round";
        if (this.isCollidable == true){
            context.beginPath();
            context.moveTo(this.startPoint.x, this.startPoint.y);
            context.lineTo(this.endPoint.x, this.endPoint.y);
            context.stroke();
            context.closePath();
        }
    }
    private calcEndAngle(): number{
        return Math.atan((this.endPoint.y - this.startPoint.y) / (this.endPoint.x - this.startPoint.x));
    }

    get length(): number{
        return Math.sqrt((this.startPoint.x - this.endPoint.x)**2 + (this.startPoint.y - this.endPoint.y)**2);
    }

    getContinuingSegment(transform: Vector): Segment {
        const transformedEndpoint = this.endPoint.clone().add(transform) as Vector;
        return new LineSegment(
            transformedEndpoint, 
            transformedEndpoint, 
            this.isCollidable, 
            this.endAngle
        );
    }

}