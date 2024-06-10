import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import InputManager from "./InputManager";
import LineSegment from "./LineSegment";
import Segment from "./Segment";

export default class Snake {
    private segments: Segment[] = [];
    private inputManager: InputManager;
    private color: string;
    private isAlive: boolean = true;
    public turnRadius: number = 130;

    constructor(startPos: LineSegment, color: string){
        this.addSegment(startPos);
        this.color = color;
    }
    addSegment(segment: Segment) {
        this.segments.push(segment);
    }

    get head(): Segment {
        return this.segments.slice(-1).pop();
    }

    draw(context: CanvasRenderingContext2D) {
        context.lineWidth = 12;
        //TODO fix this to be a single path
        // context.beginPath();
        


        this.segments.forEach((segment, index) => {
                segment.draw(context, this.color);
                if (this.head != segment) {
                    return;
                }
                if (segment instanceof ArcSegment){
                    // segment.drawDebug(context, '#666666');
                    context.beginPath();
                    context.arc(segment.center.x, segment.center.y, segment.radius, segment.endAngle, segment.endAngle, segment.isCounterClockwise());
                    context.stroke();
                    context.closePath();
                }
                else if (segment instanceof LineSegment){
                    context.beginPath();
                    context.moveTo(segment.endPoint.x, segment.endPoint.y);
                    context.lineTo(segment.endPoint.x, segment.endPoint.y);
                    context.stroke();
                    context.closePath();
                }
        });
        // context.stroke();
    }

    move(distance: number) {
        const lastSegment = this.head;
        if (!lastSegment) return;
        
        if (lastSegment instanceof LineSegment) {
            const dx = distance * Math.cos(lastSegment.endAngle);
            const dy = distance * Math.sin(lastSegment.endAngle);
            
            //chance to make a new segment that is non collidable
            if( lastSegment.isCollidable && Math.random()>0.99){
                this.addSegment(new LineSegment (lastSegment.endPoint, new Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy) , false, lastSegment.endAngle))
                return;
            }
            if( !lastSegment.isCollidable && Math.random()>0.97){
                this.addSegment(new LineSegment (lastSegment.endPoint, new Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy) , true, lastSegment.endAngle))
                return;
            }

            const newEnd = new Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy);
            lastSegment.endPoint = newEnd;
        } else if (lastSegment instanceof ArcSegment) {
            const angleExtension = distance / lastSegment.radius;

            //chance to make a new segment that is non collidable
            if( lastSegment.isCollidable && Math.random()>0.99){
                this.addSegment(new ArcSegment (lastSegment.center, lastSegment.radius, lastSegment.endAngle, lastSegment.endAngle, lastSegment.isCounterClockwise(), false))
                return;
            }
            if( !lastSegment.isCollidable && Math.random()>0.97){
                this.addSegment(new ArcSegment (lastSegment.center, lastSegment.radius, lastSegment.endAngle, lastSegment.endAngle, lastSegment.isCounterClockwise(), true))
                return;
            }


            if (lastSegment.isCounterClockwise()){
            lastSegment.endAngle =lastSegment.endAngle - angleExtension;
            }
            else{
                lastSegment.endAngle =lastSegment.endAngle + angleExtension;
            }
        }
    }

    kill() {

    }
}