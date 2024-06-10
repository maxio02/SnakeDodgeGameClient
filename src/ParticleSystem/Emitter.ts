import { Vector } from "vector2d";
import Particle, { shape } from "./Particle";
import { getRandomDirection } from "./ParticleSystemUtils";

export default class Emitter{
    private aliveParticles: Particle[] = [];
    public position: Vector;
    public emitTime: number;
    public shape: shape;
    public size: number;
    public speed: number;
    public color: {r: number, g: number, b: number, a: number};
    public fadeColor: boolean;
    public fadeSize: boolean;
    public age: number;
    public canvasCtx: CanvasRenderingContext2D;
    private ticks: number = 0;

    
    public constructor(position: Vector, emitTime: number, size: number, speed: number, shape: shape = 'circle', color: {r: number, g: number, b: number, a: number}, canvasCtx:CanvasRenderingContext2D,  fadeColor: boolean = true, fadeSize: boolean = true, age: number ){
    this.position = position;
    this.emitTime = emitTime;
    this.size = size;
    this.speed = speed;
    this.shape = shape;
    this.color = color;
    this.canvasCtx = canvasCtx;
    this.fadeColor = fadeColor;
    this.fadeSize = fadeSize; 
    this.age = age;
    }

    public tick(dt: number){
        if (this.ticks % this.emitTime == 0){
            this.aliveParticles.push(new Particle(this.position.clone() as Vector, getRandomDirection(), this.size, this.speed, this.shape,{...this.color},this.canvasCtx, this.age, this.fadeColor, this.fadeSize));
            this.aliveParticles.push(new Particle(this.position.clone() as Vector, getRandomDirection(), this.size, this.speed, this.shape,{...this.color},this.canvasCtx, this.age, this.fadeColor, this.fadeSize));
            this.aliveParticles.push(new Particle(this.position.clone() as Vector, getRandomDirection(), this.size, this.speed, this.shape,{...this.color},this.canvasCtx, this.age, this.fadeColor, this.fadeSize));
        }
        this.aliveParticles.forEach(particle => {
            particle.tick(dt)
        });

        this.aliveParticles = this.aliveParticles.filter(particle => particle.age > 0);


        this.ticks++;
    }

    public draw(){
        this.aliveParticles.forEach(particle => {
            particle.draw()
        });
    }

}