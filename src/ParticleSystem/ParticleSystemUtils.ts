import { Vector } from "vector2d";

export function getRandomDirection(): Vector{

    return(new Vector(Math.random()*2-1, Math.random()*2-1))
}

export function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }