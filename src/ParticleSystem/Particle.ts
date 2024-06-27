import { Vector } from "vector2d";
export type shape = 'circle' | 'square';

export default class Particle {
    private _position: Vector;
    private _velocity: Vector;
    private _shape: shape;
    private _size: number;
    private _speed: number;
    private _color: { r: number, g: number, b: number, a: number };
    private _fadeColor: boolean;
    private _fadeSize: boolean;
    private _fadeDirection: 'normal' | 'reverse';
    private _age: number;

    private _canvasCtx: CanvasRenderingContext2D;
    private _sizeFadeAmount: number;
    private _colorFadeAmount: number;



    public constructor(position: Vector, velocity: Vector, size: number, speed: number, shape: shape = 'circle', color: { r: number, g: number, b: number, a: number }, canvasCtx: CanvasRenderingContext2D, age: number, fadeColor?: boolean, fadeSize?: boolean, fadeDirection?: 'normal' | 'reverse') {
        this._position = position;
        this._velocity = velocity;
        this._age = age;
        this._colorFadeAmount = color.a / this._age;
        this._sizeFadeAmount = size / this._age;

        if (fadeDirection === 'reverse') {
            this._size = 0;
            this._color = { ...color, a: 0 };
        } else {
            this._size = size;
            this._color = color;
        }

        this._speed = speed;
        this._shape = shape;

        this._canvasCtx = canvasCtx;
        this._fadeColor = fadeColor;
        this._fadeSize = fadeSize;
        this._fadeDirection = fadeDirection;


    }

    public tick(dt: number) {

        this._position.add(this._velocity.clone().multiplyByScalar(dt * this._speed));
        if (this._fadeColor) {
            if (this._fadeDirection === 'normal') {
                this._color.a -= this._colorFadeAmount;
            } else {
                this._color.a += this._colorFadeAmount;
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

        const scaleX = this._canvasCtx.canvas.width / 2000;
        const scaleY = this._canvasCtx.canvas.height / 2000;


        this._canvasCtx.moveTo(this._position.x * scaleX, this._position.y * scaleY);
        this._canvasCtx.fillStyle = `rgba(${this._color.r},${this._color.g}, ${this._color.b}, ${this._color.a})`;
        this._canvasCtx.beginPath();
        switch (this._shape) {
            case 'circle':
                this._canvasCtx.arc(this._position.x * scaleX, this._position.y * scaleY, this._size, 0, 2 * Math.PI);
                this._canvasCtx.fill();
                break;
            case 'square':
                this._canvasCtx.fillRect((this._position.x - this._size) * scaleX, (this._position.y - this._size) * scaleY, this._size * 2 * scaleX, this._size * 2 * scaleY);
                break;
        }
        this._canvasCtx.closePath();
    }

    public get age() {
        return this._age;
    }
}
