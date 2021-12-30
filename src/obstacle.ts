import { LanePositionsTypes } from './constant';

export default abstract class Obstacle {
  private xPos: number | undefined;

  constructor(
    protected ctx: CanvasRenderingContext2D,
    private width: number,
    private dx: number,
    private currentLane: LanePositionsTypes,
    private yPos: number,
  ) {
    this.xPos = ctx?.canvas.width;
  }

  get w() {
    return this.width;
  }

  set x(newXValue: number) {
    this.xPos = newXValue;
  }

  get x() {
    return this.xPos as number;
  }

  get y() {
    return this.yPos;
  }

  set velocity(v: number) {
    this.dx = v;
  }

  get velocity() {
    return this.dx;
  }

  get lane(): LanePositionsTypes {
    return this.currentLane;
  }

  set lane(current: LanePositionsTypes) {
    this.currentLane = current;
  }

  abstract draw(): void;
  abstract update(secondsPassed: number): void;
}
