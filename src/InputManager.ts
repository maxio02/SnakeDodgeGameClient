import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import LineSegment from "./LineSegment";
import Snake from "./Snake";
import { sendKeyEventToServer } from "./WebSocketClient/websocket";

export default class InputManager {
  private keyMap: { [key: string]: boolean } = {};
  private snake: Snake;
  private leftKey: string;
  private rightKey: string;

  constructor(snake: Snake, leftKey: string, rightKey: string) {
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
    this.snake = snake;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
  }

  private onKeyDown(event: KeyboardEvent): void {
    //if snake is dead, ignore the key presses
    if(!this.snake.isAlive) return;

    const key = event.key.toUpperCase();
    

    //ignore keys not assigned to self, this would result in the keymap having unnecessary keys and triggering the onkeyUp events
    if(key != this.leftKey && key != this.rightKey){
      return;
    }

    //switch off the current down key if the other direction is pressed
    if (this.keyMap[this.rightKey] && key == this.leftKey) {
      this.keyMap[this.rightKey] = false;
    }
    else if (this.keyMap[this.leftKey] && key == this.rightKey) {
      this.keyMap[this.leftKey] = false;
    }
    //return if the key is alraedy in the map, prevents autoclicking
    else if (this.keyMap[key]) {
      return
    }
    this.keyMap[key] = true;


    let head = this.snake.head;
    let endPoint = head.endPoint;
    let tangentAngle = 0;

    //calculate the starting tangent angle of the line

    sendKeyEventToServer(key, true);

    if (head instanceof LineSegment) {
      tangentAngle += Math.PI / 2;

      if (key == this.rightKey) {

        this.snake.addSegment(new ArcSegment(new Vector(
          endPoint.x + this.snake.turnRadius * Math.cos(this.snake.head.endAngle + tangentAngle),
          endPoint.y + this.snake.turnRadius * Math.sin(this.snake.head.endAngle + tangentAngle)),
          this.snake.turnRadius, this.snake.head.endAngle - tangentAngle, this.snake.head.endAngle - tangentAngle, false, head.isCollidable))
      }
      if (key == this.leftKey) {
        this.snake.addSegment(new ArcSegment(new Vector(
          endPoint.x + this.snake.turnRadius * Math.cos(this.snake.head.endAngle - tangentAngle),
          endPoint.y + this.snake.turnRadius * Math.sin(this.snake.head.endAngle - tangentAngle)),
          this.snake.turnRadius, this.snake.head.endAngle + tangentAngle, this.snake.head.endAngle + tangentAngle, true, head.isCollidable))
      }

    } 
    // 
    else if (head instanceof ArcSegment) {

      tangentAngle = head.isCounterClockwise ? -Math.PI : Math.PI;
      if (key == this.rightKey) {
        this.snake.addSegment(new ArcSegment(new Vector(
          endPoint.x - this.snake.turnRadius * Math.cos(this.snake.head.endAngle + tangentAngle),
          endPoint.y - this.snake.turnRadius * Math.sin(this.snake.head.endAngle + tangentAngle)),
          this.snake.turnRadius, this.snake.head.endAngle - tangentAngle, this.snake.head.endAngle - tangentAngle, false, head.isCollidable))
      }
      if (key == this.leftKey) {
        this.snake.addSegment(new ArcSegment(new Vector(
          endPoint.x - this.snake.turnRadius * Math.cos(this.snake.head.endAngle - tangentAngle),
          endPoint.y - this.snake.turnRadius * Math.sin(this.snake.head.endAngle - tangentAngle)),
          this.snake.turnRadius, this.snake.head.endAngle + tangentAngle, this.snake.head.endAngle + tangentAngle, true, head.isCollidable))
      }

    }

    
  }
  private onKeyUp(event: KeyboardEvent): void {
    //if snake is dead, ignore the key presses
    if(!this.snake.isAlive) return;
    
    const key = event.key.toUpperCase();

    //check if the key is in the keymap, if not just ignore it
    if (!this.keyMap[key]) {
      return;
    }
    this.keyMap[key] = false;

    //console.log(this.snake.head);
    sendKeyEventToServer(key, false);

    let head = this.snake.head;
    let endPoint = head.endPoint;
    let angle = head.endAngle;

    if (key == this.leftKey && head instanceof ArcSegment && head.isCounterClockwise()) {

      angle -= Math.PI / 2;
    } else if (key == this.rightKey && head instanceof ArcSegment && !head.isCounterClockwise()) {

      angle += Math.PI / 2;
    }



    this.snake.addSegment(new LineSegment(endPoint,
      new Vector(endPoint.x + 5 * Math.cos(angle), endPoint.y + 5 * Math.sin(angle)), head.isCollidable ,angle));
    //console.log(this.snake.head);
  }


  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown.bind(this));
    window.removeEventListener('keyup', this.onKeyUp.bind(this));
  }



}

