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
    private distanceToChangeOfState: number = 10;


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
        this.canvasCtx.lineWidth = 12;
        //TODO fix this to be a single path
        // context.beginPath();

        this.segments.forEach((segment, index) => {
            segment.draw(this.canvasCtx, this.color);
            if (this.head != segment) {
                return;
            }
            if (segment instanceof ArcSegment) {
                // segment.drawDebug(this.canvasCtx, '#666666');
                this.canvasCtx.beginPath();
                this.canvasCtx.arc(segment.center.x, segment.center.y, segment.radius, segment.endAngle, segment.endAngle, segment.isCounterClockwise());
                this.canvasCtx.stroke();
                this.canvasCtx.closePath();
            }
            else if (segment instanceof LineSegment) {
                this.canvasCtx.beginPath();
                this.canvasCtx.moveTo(segment.endPoint.x, segment.endPoint.y);
                this.canvasCtx.lineTo(segment.endPoint.x, segment.endPoint.y);
                this.canvasCtx.stroke();
                this.canvasCtx.closePath();
            }
        });
        // context.stroke();
    }

    // move(distance: number) {
    //     //do not move is dead, simple
    //     if (!this.isAlive) return;

    //     this.checkWalls();

    //     // do not move if snake has no segments
    //     const lastSegment = this.head;
    //     if (!lastSegment) return;


        


    //     //move the snake the correct amount, depending on the head segment
    //     if (lastSegment instanceof LineSegment) {
    //         const dx = distance * Math.cos(lastSegment.endAngle);
    //         const dy = distance * Math.sin(lastSegment.endAngle);

    //         const newEnd = new Vector(lastSegment.endPoint.x + dx, lastSegment.endPoint.y + dy);
    //         lastSegment.endPoint = newEnd;

    //     }
    //     else if (lastSegment instanceof ArcSegment) {
    //         const angleExtension = distance / lastSegment.radius;

    //         lastSegment.endAngle = lastSegment.isCounterClockwise() ? lastSegment.endAngle - angleExtension : lastSegment.endAngle + angleExtension;

    //     }
        
        // // add new segment lastsegment.createflippedstate
    //     if (lastSegment.isCollidable && this.distanceToChangeOfState < 0) {

    //         this.distanceToChangeOfState = Math.random() * 80 + 30 // 40-90

    //         if (lastSegment instanceof LineSegment) {
    //             this.addSegment(new LineSegment(lastSegment.endPoint, new Vector(lastSegment.endPoint.x, lastSegment.endPoint.y), false, lastSegment.endAngle));
    //         }
    //         else if (lastSegment instanceof ArcSegment) {
    //             this.addSegment(new ArcSegment(lastSegment.center, lastSegment.radius, lastSegment.endAngle, lastSegment.endAngle, lastSegment.isCounterClockwise(), false))
    //         }
    //     }

    //     if (!lastSegment.isCollidable && this.distanceToChangeOfState < 0) {

    //         this.distanceToChangeOfState = Math.random() * 500 + 80 // 80-320

    //         if (lastSegment instanceof LineSegment) {
    //             this.addSegment(new LineSegment(lastSegment.endPoint, new Vector(lastSegment.endPoint.x, lastSegment.endPoint.y), true, lastSegment.endAngle))
    //         }
    //         else if (lastSegment instanceof ArcSegment) {
    //             this.addSegment(new ArcSegment(lastSegment.center, lastSegment.radius, lastSegment.endAngle, lastSegment.endAngle, lastSegment.isCounterClockwise(), true))
    //         }

    //     }

    //     //update the distance travelled
    //     this.distanceToChangeOfState -= distance;
    // }

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

checkWalls() {
    const lastSegment = this.head;
    if (lastSegment.endPoint.x < 0) {
        this.addSegment(lastSegment.getContinuingSegment(new Vector(this.canvasCtx.canvas.width, 0)));
    } 
    else if (lastSegment.endPoint.x > this.canvasCtx.canvas.width) {
        this.addSegment(lastSegment.getContinuingSegment(new Vector(-this.canvasCtx.canvas.width, 0)));
    }
    
    if (lastSegment.endPoint.y < 0) {
        this.addSegment(lastSegment.getContinuingSegment(new Vector(0, this.canvasCtx.canvas.height)));
    } 
    else if (lastSegment.endPoint.y > this.canvasCtx.canvas.height) {
        this.addSegment(lastSegment.getContinuingSegment(new Vector(0, -this.canvasCtx.canvas.height)));
    }
    
}

    
}