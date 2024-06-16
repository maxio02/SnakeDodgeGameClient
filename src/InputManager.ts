import Snake from "./Snake";
import { sendKeyEventToServer } from "./WebSocketClient/websocket";

export const enum Dir{
  LEFT,
  RIGHT
}
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

    sendKeyEventToServer(key == this.rightKey ? Dir.RIGHT : Dir.LEFT, true);
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

    sendKeyEventToServer(key == this.rightKey ? Dir.RIGHT : Dir.LEFT, false);
  }


  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown.bind(this));
    window.removeEventListener('keyup', this.onKeyUp.bind(this));
  }



}

