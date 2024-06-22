import Snake from "./Snake";
import { sendKeyEventToServer } from "./WebSocketClient/websocket";

export const enum Dir{
  LEFT,
  RIGHT
}

export default class InputManager {
  private _keyMap: { [key: string]: boolean } = {};
  private _snake: Snake;
  private _leftKey: string;
  private _rightKey: string;

  constructor(snake: Snake, leftKey: string, rightKey: string) {
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
    this._snake = snake;
    this._leftKey = leftKey;
    this._rightKey = rightKey;
  }

  private onKeyDown(event: KeyboardEvent): void {
    //if snake is dead, ignore the key presses
    if(!this._snake.isAlive) return;

    const key = event.key.toUpperCase();
    

    //ignore keys not assigned to self, this would result in the keymap having unnecessary keys and triggering the onkeyUp events
    if(key != this._leftKey && key != this._rightKey){
      return;
    }

    //switch off the current down key if the other direction is pressed
    if (this._keyMap[this._rightKey] && key === this._leftKey) {
      this._keyMap[this._rightKey] = false;
    }
    else if (this._keyMap[this._leftKey] && key === this._rightKey) {
      this._keyMap[this._leftKey] = false;
    }
    //return if the key is alraedy in the map, prevents autoclicking
    else if (this._keyMap[key]) {
      return
    }
    this._keyMap[key] = true;

    sendKeyEventToServer(key === this._rightKey ? Dir.RIGHT : Dir.LEFT, true);
  }
  private onKeyUp(event: KeyboardEvent): void {
    //if snake is dead, ignore the key presses
    if(!this._snake.isAlive) return;
    
    const key = event.key.toUpperCase();

    //check if the key is in the keymap, if not just ignore it
    if (!this._keyMap[key]) {
      return;
    }
    this._keyMap[key] = false;

    sendKeyEventToServer(key === this._rightKey ? Dir.RIGHT : Dir.LEFT, false);
  }


  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown.bind(this));
    window.removeEventListener('keyup', this.onKeyUp.bind(this));
  }



}

