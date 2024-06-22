import Snake from "../Snake";

export class Player {
  private _username: string;
  public isReady: boolean;
  public color: string;
  public snake: Snake | null;

  constructor(username: string, isReady: boolean = false, color?: string) {
    this._username = username;
    this.isReady = isReady;
    this.color = color || "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    this.snake = null;
  }

  toJSON() {
    return {
      username: this.username,
      isReady: this.isReady,
      color: this.color
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