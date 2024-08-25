import { Vector } from "vector2d";
import { TinyColor } from '@ctrl/tinycolor';
export default abstract class Segment {
    abstract isCollidable: boolean;
    abstract draw(context: CanvasRenderingContext2D, color: TinyColor): void;
    abstract get endAngle(): number;
    abstract get endPoint(): Vector;
    abstract getContinuingSegment(transform: Vector): Segment;
}