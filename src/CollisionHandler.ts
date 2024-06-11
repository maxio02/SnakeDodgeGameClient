import ArcSegment from "./ArcSegment";
import LineSegment from "./LineSegment";
import Snake from "./Snake";

export default class CollisionHandler {
    private snakes: Snake[];


    constructor(snakes: Snake[]) {
        this.snakes = snakes;
    }


    public checkCollisions(): Snake {

        //we will only check the head of snake1 against all other segments on the board (slow)
        this.snakes.forEach(snake1 => {
            //if the snake is dead ignore it
            if (!snake1.isAlive) return;

            //if the head of the snake is not collidable we can skip all further checks
            if (!snake1.head.isCollidable) return;


            this.snakes.forEach(snake2 => {

                

                if (snake1.head instanceof LineSegment) {

                    snake2.segments.forEach(segment => {

                        //skip the checks if the segment is non collidable or if the segment is itself
                        if (!segment.isCollidable || segment === snake1.head) return;

                        if (segment instanceof LineSegment) {
                            if (this.checkLineToLineCollision(snake1.head as LineSegment, segment)){
                                snake1.kill();
                                return;
                            }

                        }
                        else if (segment instanceof ArcSegment) {
                            this.checkLineToArcCollision(snake1.head as LineSegment, segment)
                        }

                    });
                }
                else if (snake1.head instanceof ArcSegment) {

                    snake2.segments.forEach(segment => {

                        if (segment instanceof LineSegment) {
                            this.checkLineToArcCollision(segment, snake1.head as ArcSegment)
                        }
                        else if (segment instanceof ArcSegment) {
                            this.checkArcToArcCollision(snake1.head as ArcSegment, segment)
                        }

                    });
                }

            });

        });

        return null;
    }

    private checkLineToLineCollision(segment1: LineSegment, segment2: LineSegment): boolean{
        let uA = ((segment2.endPoint.x-segment2.startPoint.x)*(segment1.startPoint.y-segment2.startPoint.y) - (segment2.endPoint.y-segment2.startPoint.y)*(segment1.startPoint.x-segment2.startPoint.x)) / 
                 ((segment2.endPoint.y-segment2.startPoint.y)*(segment1.endPoint.x-segment1.startPoint.x) - (segment2.endPoint.x-segment2.startPoint.x)*(segment1.endPoint.y-segment1.startPoint.y));

        let uB = ((segment1.endPoint.x-segment1.startPoint.x)*(segment1.startPoint.y-segment2.startPoint.y) - (segment1.endPoint.y-segment1.startPoint.y)*(segment1.startPoint.x-segment2.startPoint.x)) / 
                 ((segment2.endPoint.y-segment2.startPoint.y)*(segment1.endPoint.x-segment1.startPoint.x) - (segment2.endPoint.x-segment2.startPoint.x)*(segment1.endPoint.y-segment1.startPoint.y));
        if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
            return true;
        }
        return false;
    }

    private checkLineToArcCollision(segment1: LineSegment, segment2: ArcSegment): boolean{
        return false;
    }

    private checkArcToArcCollision(segment1: ArcSegment, segment2: ArcSegment): boolean{
        return false;
    }
}
