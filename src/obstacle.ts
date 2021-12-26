export default abstract class Obstacle {
  private xPos: number | undefined;

  private obstaclePassed: boolean;

  constructor(
    protected ctx: CanvasRenderingContext2D,
    private width: number,
    private dx: number,
    private currentFloor: 1 | 2,
  ) {
    this.xPos = ctx?.canvas.width;
    this.obstaclePassed = false;
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

  set velocity(v: number) {
    this.dx = v;
  }

  get velocity() {
    return this.dx;
  }

  get isTopFloor(): boolean {
    return this.currentFloor === 1;
  }

  set isTopFloor(value: boolean) {
    this.currentFloor = value ? 1 : 2;
  }

  get passed() {
    return this.obstaclePassed;
  }

  set passed(didPass: boolean) {
    this.obstaclePassed = didPass;
  }

  abstract draw(): void;
  abstract update(secondsPassed: number): void;
}
