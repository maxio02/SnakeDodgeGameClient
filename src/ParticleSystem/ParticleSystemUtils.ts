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

function getAngle(vector: Vector): number {
  return Math.atan2(vector.y, vector.x);
}

function fromAngle(angle: number): Vector {
  return new Vector(Math.cos(angle), Math.sin(angle));
}

export function getQualityMultiplier(): number {
  let qualitySetting = document.documentElement.getAttribute('quality');
  let multiplier: number;
  switch (qualitySetting) {
    case 'L':
      multiplier = 0.34;
        break;
    case 'M':
      multiplier = 0.67;
        break;
    case 'H':
      multiplier = 1;
        break;
}
return multiplier;
}