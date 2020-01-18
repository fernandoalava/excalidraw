import { randomSeed } from "roughjs/bin/math";
import nanoid from "nanoid";
import { Drawable } from "roughjs/bin/core";
import { Point } from "roughjs/bin/geometry";

export function newElement(
  type: string,
  x: number,
  y: number,
  strokeColor: string,
  backgroundColor: string,
  fillStyle: string,
  strokeWidth: number,
  roughness: number,
  opacity: number,
  width = 0,
  height = 0
) {
  let points = [] as Point[];
  const element = {
    id: nanoid(),
    type,
    x,
    y,
    width,
    height,
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    roughness,
    opacity,
    isSelected: false,
    seed: randomSeed(),
    shape: null as Drawable | Drawable[] | null,
    points
  };
  return element;
}

export function duplicateElement(element: ReturnType<typeof newElement>) {
  const copy = { ...element };
  delete copy.shape;
  copy.id = nanoid();
  copy.seed = randomSeed();
  return copy;
}
