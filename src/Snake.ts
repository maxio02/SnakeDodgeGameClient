import { Vector } from "vector2d";
import ArcSegment from "./ArcSegment";
import LineSegment from "./LineSegment";
import Segment from "./Segment";
import CircularEmitter from "./ParticleSystem/CircularEmitter";
import { drawArrow } from "./Drawer";
import { currentRoom } from "./MenuManager/login";
import { TinyColor } from '@ctrl/tinycolor';

export default class Snake {
  public segments: Segment[] = [];
  private _color: TinyColor;
  public isAlive: boolean = true;
  public turnRadius: number = 60;
  private _emitter: CircularEmitter | null = null;
  private _canvasCtx: CanvasRenderingContext2D;

  constructor(
    startPos: LineSegment,
    color: TinyColor,
    canvasCtx: CanvasRenderingContext2D
  ) {
    this.addSegment(startPos);
    this._color = color;
    this._canvasCtx = canvasCtx;
    this._emitter = new CircularEmitter(
      0,
      this.head.endPoint,
      this._canvasCtx,
      {
        emitInterval: 2,
        emitAmountPerTick: 3,
        particleSize: 7,
        speed: 4,
        color: this._color,
      }
    );
  }
  addSegment(segment: Segment) {
    this.segments.push(segment);
  }

  get head(): Segment {
    return this.segments.slice(-1).pop();
  }

  draw() {
    const scaleX = this._canvasCtx.canvas.width / currentRoom.settings.arenaSize;
    const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;

    this._canvasCtx.lineWidth = 12 * Math.min(scaleX, scaleY);
    //TODO fix this to be a single path

    this.segments.forEach((segment, index) => {
      segment.draw(this._canvasCtx, this._color);

      //draw a dot at the head, this is useful if the segment is invisible
      if (this.head === segment) {
        this._canvasCtx.beginPath();
        this._canvasCtx.arc(
          segment.endPoint.x * scaleX,
          segment.endPoint.y * scaleY,
          0.5 * Math.min(scaleX, scaleY),
          0,
          2 * Math.PI
        );
        this._canvasCtx.stroke();
        this._canvasCtx.closePath();
      }
    });
  }

  drawHeadingDir() {
    const scaleX = this._canvasCtx.canvas.width / currentRoom.settings.arenaSize;
    const scaleY = this._canvasCtx.canvas.height / currentRoom.settings.arenaSize;

    const arrowLength = 170;
    const lastSegment = this.head;
    const dx =  Math.cos(lastSegment.endAngle) * arrowLength;
    const dy =  Math.sin(lastSegment.endAngle) * arrowLength;
    const width = 12 * Math.min(scaleX, scaleY);
    const newEnd = new Vector(
      lastSegment.endPoint.x + dx,
      lastSegment.endPoint.y + dy
    );

    drawArrow(this._canvasCtx, this.head.endPoint.clone().mulS(scaleX) as Vector, newEnd.mulS(scaleX), this._color, width * 0.6);
  }

  kill() {
    this.isAlive = false;
    this._emitter.position = this.head.endPoint;
    this._emitter.emitTime = 10;
  }

  updateEmitter(dt: number) {
    if (this._emitter) {
      this._emitter.tick(dt);
      this._emitter.draw();
    }
  }
}
