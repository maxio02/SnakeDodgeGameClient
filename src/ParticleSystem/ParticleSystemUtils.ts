import { Vector } from "vector2d";

export function getRandomDirection(): Vector {

  return (new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1))
}

export function getBiasedRandomDirection(direction: Vector, spreadAngle: number): Vector {
  const angle = getAngle(direction) + (Math.random() - 0.5) * spreadAngle;
  return fromAngle(angle);
}

export function getPositionInCircle(radius: number, onEdge: boolean) {
  const angle = Math.random() * 2 * Math.PI;
  if (!onEdge) {
    radius = radius * Math.sqrt(Math.random());
  }
  return new Vector(radius * Math.cos(angle), radius * Math.sin(angle));
}

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


function getAngle(vector: Vector): number {
  return Math.atan2(vector.y, vector.x);
}

function fromAngle(angle: number): Vector {
  return new Vector(Math.cos(angle), Math.sin(angle));
}