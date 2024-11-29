import { Vector } from "vector2d";
import Segment from "./Segment";
import { currentRoom } from "./MenuManager/login";
import { TinyColor } from '@ctrl/tinycolor';
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

    draw(context: CanvasRenderingContext2D, color: TinyColor): void {
        const scaleX = context.canvas.width / currentRoom.settings.arenaSize;
        const scaleY = context.canvas.height / currentRoom.settings.arenaSize;

        context.lineCap = "round";
        context.strokeStyle = color.toString();
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

    splitSegmentAtCircle(circleCenter: Vector, radius: number): LineSegment[] {
        const d = this.endPoint.clone().subtract(this.startPoint);
        const f = this.startPoint.clone().subtract(circleCenter);
    
        const a = d.dot(d);
        const b = 2 * f.dot(d);
        const c = f.dot(f) - radius * radius;
    
        // Discriminant
        const discriminant = b * b - 4 * a * c;
    
        if (discriminant < 0) {
          // No intersection
          return [this];
        } else {
          // Calculate the two points of intersection (if they exist)
          const discriminantSqrt = Math.sqrt(discriminant);
          const t1 = (-b - discriminantSqrt) / (2 * a);
          const t2 = (-b + discriminantSqrt) / (2 * a);
    
          let intersections = [];
    
          if (t1 >= 0 && t1 <= 1) {
            intersections.push(
              this.startPoint.clone().add(d.clone().multiplyByScalar(t1))
            );
          }
    
          if (t2 >= 0 && t2 <= 1) {
            intersections.push(
              this.startPoint.clone().add(d.clone().multiplyByScalar(t2))
            );
          }
    
          if (intersections.length === 0) {
            // No intersections within the segment bounds
            return [this];
          } else if (intersections.length === 1) {
            // One intersection: split into two segments
            const intersectPoint = intersections[0] as Vector;
            const segment1 = new LineSegment(
              this.startPoint,
              intersectPoint,
              this.isCollidable,
              this.endAngle
            );
            const segment2 = new LineSegment(
              intersectPoint,
              this.endPoint,
              false,
              this.endAngle
            );
            return [segment1, segment2];
          } else {
            // Two intersections: split into three segments
            const [intersect1, intersect2] = intersections as Vector[];
    
            const segment1 = new LineSegment(
              this.startPoint,
              intersect1,
              this.isCollidable,
              this.endAngle
            );
            const segment2 = new LineSegment(
              intersect1,
              intersect2,
              false,
              this.endAngle
            );
            const segment3 = new LineSegment(
              intersect2,
              this.endPoint,
              this.isCollidable,
              this.endAngle
            );
    
            return [segment1, segment2, segment3];
          }
        }
      }

}