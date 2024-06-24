import { Vector } from "vector2d";
import { Room } from "../Models/Room";
import Powerup from "../PowerupSystem/powerup";


export interface GameStateData {
    type: string;
    state: number;
  }
  
  export const enum PowerupAction {
    REMOVE,
    ADD
  }

  
  export interface RoomData {
    room: MessageRoom;
  }

  export interface MessageRoom{
    code: string;
    gameState: number;
    maxSize: number;
    host: MessagePlayer;
    players: { [key: string]: MessagePlayer; };
  }

  export interface MessagePlayer{
    isReady: boolean;
    username: string;
    color: string;
  }

  export interface MessageGameplay{
    type: string;
    snakeHeads: SnakeHeadData[];
    powerUpInfo: MessagePowerup;
  }

  export interface MessagePowerup{
    action: PowerupAction;
    powerup: Powerup;
  }


  export interface SnakeHeadData{
    username: string;
    lastSegment: messageArcSegment | messageLineSegment;
    segmentType: 'ArcSegment' | 'LineSegment';
  }

  export interface messageArcSegment{
    startAngle: number;
    endAngle: number;
    center: Vector;
    radius: number;

    endPoint: Vector;
    isCollidable: boolean;
    isNewThisTick: boolean;
    
    counterClockwise: boolean;

  }

  export interface messageLineSegment{
    endAngle: number;
    startPoint: Vector;
    endPoint: Vector;
    isCollidable: boolean;
    isNewThisTick: boolean;
  }