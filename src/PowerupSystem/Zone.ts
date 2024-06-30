import { Vector } from 'vector2d';
import { PowerupType } from './powerup';
export default class Zone {
    private _position: Vector;
    private _radius: number;
    private _type: PowerupType;
    constructor(position: Vector, radius: number, type: PowerupType){
        this._position = position;
        this._radius = radius;
        this._type = type;
    }

    toJSON() {
        return {
            position: this._position,
            radius: this._radius,
            type: this._type
        };
    }
}