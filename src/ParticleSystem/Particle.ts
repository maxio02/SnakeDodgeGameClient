import { Vector } from "vector2d";
import { currentRoom } from "../MenuManager/login";
import { TinyColor } from '@ctrl/tinycolor';
export type shape = 'circle' | 'square';

export default class Particle {
    private _position: Vector;
    private _velocity: Vector;
    private _shape: shape;
    private _size: number;
    private _speed: number;
    private _color: TinyColor;
    private _fadeColor: boolean;
    private _fadeSize: boolean;
    private _fadeDirection: 'normal' | 'reverse';
    private _age: number;
    private _rotation: number;
    private _scale: Vector;

    private _canvasCtx: CanvasRenderingContext2D;
    private _sizeFadeAmount: number;
    private _colorFadeAmount: number;



    public constructor(position: Vector, velocity: Vector, rotation:number, size: number, speed: number, shape: shape = 'circle', color: TinyColor, canvasCtx: CanvasRenderingContext2D, age: number, fadeColor?: boolean, fadeSize?: boolean, fadeDirection?: 'normal' | 'reverse') {
        this._position = position;
        this._velocity = velocity;
        this._age = age;
        this._color = color.clone();
        if (fadeDirection === 'reverse') {
            this._size = 0;
            this._color.setAlpha(0);
        } else {
            this._size = size;
        }

        this._colorFadeAmount = color.getAlpha() / this._age;
        this._sizeFadeAmount = size / this._age;

        
        this._speed = speed;
        this._shape = shape;

        this._canvasCtx = canvasCtx;
        this._fadeColor = fadeColor;
        this._fadeSize = fadeSize;
        this._fadeDirection = fadeDirection;
        this._rotation = rotation;

        this._scale = new Vector(this._canvasCtx.canvas.width / currentRoom.settings.arenaSize, this._canvasCtx.canvas.height / currentRoom.settings.arenaSize);

    }

    public tick(dt: number) {

        this._position.add(this._velocity.clone().multiplyByScalar(dt * this._speed));
        if (this._fadeColor) {
            if (this._fadeDirection === 'normal') {
                this._color.setAlpha(this._color.getAlpha() - this._colorFadeAmount);
            } else {
                this._color.setAlpha(this._color.getAlpha() + this._colorFadeAmount);
            }
        }
        if (this._fadeSize) {
            if (this._fadeDirection === 'normal') {
            this._size -= this._sizeFadeAmount;
            } else {
                this._size += this._sizeFadeAmount;
            }
        }
        this._age--;
    }

    public draw() {

        this._canvasCtx.save();
        this._canvasCtx.translate(this._position.x * this._scale.x, this._position.y * this._scale.y);
        this._canvasCtx.rotate(this._rotation);

        // this._canvasCtx.moveTo(this._position.x * this._scale.x, this._position.y * this._scale.y);
        
        this._canvasCtx.fillStyle = this._color.toRgbString();
        this._canvasCtx.beginPath();
        switch (this._shape) {
            case 'circle':
                this._canvasCtx.arc(0, 0, this._size, 0, 2 * Math.PI);
                this._canvasCtx.fill();
                break;
            case 'square':
                this._canvasCtx.fillRect(-this._size, -this._size, this._size * 2, this._size * 2);
                break;
        }
        this._canvasCtx.closePath();

        this._canvasCtx.restore();
    }

    public get age() {
        return this._age;
    }
}
