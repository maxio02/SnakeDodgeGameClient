import { TinyColor, random } from '@ctrl/tinycolor';
import Snake from "../Snake";

export class Player {
  private _username: string;
  public isReady: boolean;
  public color: TinyColor;
  public snake: Snake | null;

  constructor(username: string, isReady: boolean = false, color?: TinyColor) {
    this._username = username;
    this.isReady = isReady;
    if(color){
      if (! color.isValid){
        this.color = random({
          luminosity: 'random',
          hue: 'random',
        });
      }
      else {
        this.color = color;
      }
    }
    else {
      this.color = random({
        luminosity: 'random',
        hue: 'random',
      });
    }
    
    this.snake = null;
  }

  toJSON() {
    return {
      username: this.username,
      isReady: this.isReady,
      color: this.color.toString()
    };
  }

  public get username() {
    return this._username;
  }

  public reset() {
    // this.isReady = false;
    this.snake = null;
  }

}