import { Vector } from "vector2d";

export function getRandomDirection(): Vector {

  return (new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1))
}

export function getBiasedRandomDirection(direction: Vector, spreadAngle: number): Vector {
  const angle = getAngle(direction) + (Math.random() - 0.5) * spreadAngle;
  return fromAngle(angle);
}

export function getPositionInCircle(radius: number, onEdge: boolean) {
  let point;
  do {
    point = new Vector(Math.random()*radius*2 - radius, Math.random()*radius*2 - radius)
  } while (point.x**2 + point.y**2 > radius**2)

  if (onEdge){
    point.normalise().mulS(radius);
  }
  return point;
}

export function getPositionInRectangle(width: number, height: number ){
  return new Vector(Math.random() * width, Math.random() * height);
}
export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function hexToRgbA(hex: string) {
  let a = 0;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
  if( typeof result[4] === "undefined"){
    a = 1;
  }else{
    a = parseInt(result[4], 16)/255;
  }

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: a
  } : null;
}


function getAngle(vector: Vector): number {
  return Math.atan2(vector.y, vector.x);
}

function fromAngle(angle: number): Vector {
  return new Vector(Math.cos(angle), Math.sin(angle));
}

export function getRgbColor(color: {r: number, g: number, b: number, a: number}) {
  const { r, g, b } = color;
  return { r, g, b };
}