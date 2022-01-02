import { LanePositionsTypes } from './constant';

export default abstract class Obstacle {
  private xPos: number | undefined;

  private passed: boolean;

  constructor(
    protected ctx: CanvasRenderingContext2D,
    private width: number,
    private dx: number,
    private currentLane: LanePositionsTypes,
    private yPos: number,
  ) {
    this.xPos = ctx?.canvas.width;
    this.passed = false;
  }

  get w() {
    return this.width;
  }

  get x() {
    return this.xPos as number;
  }

  set x(x: number) {
    this.xPos = x;
  }

  get y() {
    return this.yPos;
  }

  get velocity() {
    return this.dx;
  }

  set velocity(dx: number) {
    this.dx = dx;
  }

  get lane(): LanePositionsTypes {
    return this.currentLane;
  }

  set lane(current: LanePositionsTypes) {
    this.currentLane = current;
  }

  get isPassed() {
    return this.passed;
  }

  set isPassed(isPassed: boolean) {
    this.passed = isPassed;
  }

  abstract draw(): void;
  abstract update(secondsPassed: number): void;
}
