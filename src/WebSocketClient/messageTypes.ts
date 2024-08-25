import Powerup from "../PowerupSystem/powerup";
import { Player } from "../Models/Player";


export interface GameStateData {
    type: string;
    state: number;
  }
  
  export const enum PowerupAction {
    REMOVE,
    SPAWN,
    APPLY
  }
  
  export interface RoomData {
    room: MessageRoom;
  }

  export interface MessageRoom{
    code: string;
    gameState: number;
    host: MessagePlayer;
    players: { [key: string]: MessagePlayer; };
    settings:RoomSettings;
  }

  export interface RoomSettings {
    roomSize: number;
    maxPowerups: number;
    powerupInterval: number;
    selfCollision: boolean;
    arenaSize: number;
}


  export interface MessagePlayer{
    isReady: boolean;
    username: string;
    color: string;
  }

  export interface MessageGameplay{
    t: string; //type
    s: SnakeHeadData[]; //snakeHeads
    p: MessagePowerup[]; //PowerupList
  }

  export interface MessagePowerup{
    action: PowerupAction;
    powerup: Powerup;
    player: Player;
  }


  export interface SnakeHeadData{
    u: string; //username
    lS: NewLineSegmentMessage | ExistingLineSegmentMessage | NewArcSegmentMessage | ExistingArcSegmentMessage; //lastSegment
    sT: 'A' | 'L'; //segmentType L-Line A-Arc
  }

  interface Point {
    x: string;
    y: string;
}
  export interface NewLineSegmentMessage {
    startPoint: Point;
    endPoint: Point;
    endAngle: string;
    isCollidable: boolean;
    isNewThisTick: boolean;
}

export interface ExistingLineSegmentMessage {
    endPoint: Point;
    isNewThisTick: boolean;
}

export interface NewArcSegmentMessage {
  center: Point;
  radius: string;
  startAngle: string;
  endAngle: string;
  counterClockwise: boolean;
  isCollidable: boolean;
  isNewThisTick: boolean;
}

export interface ExistingArcSegmentMessage {
  endAngle: string;
  isNewThisTick: boolean;
}
