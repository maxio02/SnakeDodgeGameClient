import { Vector } from "vector2d";
export type shape = 'circle' | 'square';
export default class Particle {
    position: Vector;
    velocity: Vector;
    shape: shape;
    size: number;
    speed: number;
    color: {r: number, g: number, b: number, a: number};
    fadeColor: boolean;
    fadeSize: boolean;
    age: number;
    canvasCtx: CanvasRenderingContext2D;
    private sizeFadeAmount: number;
    private colorFadeAmount: number;

 

    public constructor(position: Vector, velocity: Vector, size: number, speed: number,  shape: shape = 'circle', color: {r: number, g: number, b: number, a: number}, canvasCtx:CanvasRenderingContext2D, age: number,  fadeColor?: boolean, fadeSize?: boolean){
        this.position = position;
        this.velocity = velocity;
        this.size = size;
        this.speed = speed;
        this.shape = shape;
        this.color = color;
        this.canvasCtx = canvasCtx;
        this.fadeColor = fadeColor;
        this.fadeSize = fadeSize; 
        this.age = age;
        this.colorFadeAmount = this.color.a/this.age;
        this.sizeFadeAmount = this.size/this.age;
    }

    public tick(dt: number){

        this.position.add(this.velocity.clone().multiplyByScalar(dt * this.speed));
        if(this.fadeColor){
            this.color.a -= this.colorFadeAmount;
        }
        if(this.fadeSize){
            this.size -=  this.sizeFadeAmount;
        }
        this.age--;
    }

    public draw(){
        this.canvasCtx.moveTo(this.position.x, this.position.y);
        this.canvasCtx.fillStyle = `rgba(${this.color.r},${this.color.g}, ${this.color.b}, ${this.color.a})`;
        this.canvasCtx.beginPath();
        switch (this.shape) {
            case 'circle':
                this.canvasCtx.arc(this.position.x, this.position.y, this.size, 0, 2*Math.PI);
                this.canvasCtx.fill();
                break;
            case 'square':
                this.canvasCtx.fillRect(this.position.x-this.size, this.position.y-this.size, this.size*2, this.size*2);
                break;
        }
        this.canvasCtx.closePath();
    }
}
