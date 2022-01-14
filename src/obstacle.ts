import { FRAME_COUNT, LanePositionsTypes, SPRITE_HEIGHT } from './constant';

export default abstract class Obstacle {
  private xPos: number | undefined;

  private passed: boolean;

  protected currentFrame = 0;

  protected currentImageInAnimation: ImageBitmap | null;

  protected lastTimeDrawn: number | undefined;

  constructor(
    protected ctx: CanvasRenderingContext2D,
    private dx: number,
    private currentLane: LanePositionsTypes,
    private yPos: number,
    protected sprites: ImageBitmap[],
  ) {
    this.xPos = ctx?.canvas.width;
    this.passed = false;
    this.currentImageInAnimation = null;
  }

  get w() {
    if (this.currentImageInAnimation) {
      const scaleFactor = this.currentImageInAnimation.height / SPRITE_HEIGHT;
      const spriteFrame = this.currentFrame % FRAME_COUNT;
      const [startingX, endingX] = this.hitbox[spriteFrame];
      const xLeft = this.x + (startingX * scaleFactor);
      const xRight = this.x + (endingX * scaleFactor);
      return xRight - xLeft;
    }

    return 0;
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

  abstract get hitbox(): number[][];
  abstract draw(): void;
  abstract update(secondsPassed: number): void;
}
