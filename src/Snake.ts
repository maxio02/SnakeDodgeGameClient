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


    constructor(startPos: LineSegment, color: string, canvasCtx: CanvasRenderingContext2D){
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
        this.canvasCtx.lineWidth = 12;
        //TODO fix this to be a single path
        // context.beginPath();
        


        this.segments.forEach((segment, index) => {
                segment.draw(this.canvasCtx, this.color);
                if (this.head != segment) {
                    return;
                }
                if (segment instanceof ArcSegment){
                    // segment.drawDebug(this.canvasCtx, '#666666');
                    this.canvasCtx.beginPath();
                    this.canvasCtx.arc(segment.center.x, segment.center.y, segment.radius, segment.endAngle, segment.endAngle, segment.isCounterClockwise());
                    this.canvasCtx.stroke();
                    this.canvasCtx.closePath();
                }
                else if (segment instanceof LineSegment){
                    this.canvasCtx.beginPath();
                    this.canvasCtx.moveTo(segment.endPoint.x, segment.endPoint.y);
                    this.canvasCtx.lineTo(segment.endPoint.x, segment.endPoint.y);
                    this.canvasCtx.stroke();
                    this.canvasCtx.closePath();
                }
        });
        // context.stroke();
    }

    move(distance: number) {
        //do not move is dead, simple
        if (!this.isAlive) return;

        // do not move if snake has no segments
        const lastSegment = this.head;
        if (!lastSegment) return;

        
        if (lastSegment instanceof LineSegment) {
            const dx = distance * Math.cos(lastSegment.endAngle);
            const dy = distance * Math.sin(lastSegment.endAngle);
            

            //TODO change to a time based system
            //chance to make a new segment that is non collidable
            if( lastSegment.isCollidable && Math.random()>0.995){
                this.addSegment(new LineSegment (lastSegment.endPoint, new Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy) , false, lastSegment.endAngle))
                return;
            }
            if( !lastSegment.isCollidable && Math.random()>0.97){
                this.addSegment(new LineSegment (lastSegment.endPoint, new Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy) , true, lastSegment.endAngle))
                return;
            }

            const newEnd = new Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy);
            lastSegment.endPoint = newEnd;

        } 
        else if (lastSegment instanceof ArcSegment) {
            const angleExtension = distance / lastSegment.radius;

            //chance to make a new segment that is non collidable
            if( lastSegment.isCollidable && Math.random()>0.995){
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
        console.log("SNAKE DEAD")
        this.isAlive = false;
        this.emitter = new Emitter(this.head.endPoint, 1, 7, 4, 'circle', {... hexToRgb(this.color), a: 1}, this.canvasCtx, true, true, 70, 4);
    }

    updateEmitter(dt: number) {
        if (this.emitter) {
            this.emitter.tick(dt);
            this.emitter.draw();
        }
    }

    
}