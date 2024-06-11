import { Vector } from "vector2d";

export default abstract class Segment {
    abstract isCollidable: boolean;
    abstract draw(context: CanvasRenderingContext2D, color: string): void;
    abstract get endAngle(): number;
    abstract get endPoint(): Vector;
    abstract getContinuingSegment(transform: Vector): Segment;
}