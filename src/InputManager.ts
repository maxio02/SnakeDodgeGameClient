import Snake from "./Snake";
import { sendKeyEventToServer } from "./WebSocketClient/websocket";

export const enum Dir{
  LEFT,
  RIGHT
}

export default class InputManager {
  private _keyMap: { [key: string]: boolean } = {};
  private _snake: Snake;
  private _leftKeys: string[];
  private _rightKeys: string[];
  

  constructor(snake: Snake, leftKeys: string[], rightKeys: string[]) {
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));
    this._snake = snake;
    this._leftKeys = leftKeys.map(key => key.toUpperCase());
    this._rightKeys = rightKeys.map(key => key.toUpperCase());
  }

  private onKeyDown(event: KeyboardEvent): void {
    //if snake is dead, ignore the key presses
    if(!this._snake.isAlive) return;

    const key = event.key.toUpperCase();

    //ignore keys not assigned to self, this would result in the keymap having unnecessary keys and triggering the onkeyUp events
    if(!this._leftKeys.includes(key) && !this._rightKeys.includes(key)){
      return;
    }

    //switch off the current down key if the other direction is pressed
    if (this._leftKeys.some(leftKey => this._keyMap[leftKey]) && this._rightKeys.includes(key)) {
      this._leftKeys.forEach(leftKey => this._keyMap[leftKey] = false);
    } else if (this._rightKeys.some(rightKey => this._keyMap[rightKey]) && this._leftKeys.includes(key)) {
      this._rightKeys.forEach(rightKey => this._keyMap[rightKey] = false);
    }
    
    //return if the key is alraedy in the map, prevents autoclicking
    else if (this._keyMap[key]) {
      return
    }
    this._keyMap[key] = true;

    sendKeyEventToServer(this._rightKeys.includes(key) ? Dir.RIGHT : Dir.LEFT, true);
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

    sendKeyEventToServer(this._rightKeys.includes(key) ? Dir.RIGHT : Dir.LEFT, false);
  }


  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown.bind(this));
    window.removeEventListener('keyup', this.onKeyUp.bind(this));
  }



}

