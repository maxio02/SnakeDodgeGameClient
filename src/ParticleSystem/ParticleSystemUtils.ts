import { Vector } from "vector2d";

export function getRandomDirection(): Vector{

    return(new Vector(Math.random()*2-1, Math.random()*2-1))
}