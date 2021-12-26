import ImageCache, { CacheKey } from './imageCache';

const VELOCITY = -75;

export default class GameBackground {
  private startingX: number;

  constructor(
    private ctx: CanvasRenderingContext2D | null,
    private xPos: [number, number],
  ) {
    [, this.startingX] = xPos;
  }

  draw() {
    const gameBackground = ImageCache.getImage(CacheKey.BACKGROUND) as ImageBitmap;
    if (this.ctx !== null) {
      this.ctx.drawImage(gameBackground, this.xPos[0], 0);
      this.ctx.drawImage(gameBackground, this.xPos[1], 0);
    }
  }

  update(secondsPassed: number = 1) {
    if (this.xPos[1] <= 0) {
      [this.xPos[1], this.xPos[0]] = [this.xPos[0], this.xPos[1]];
      this.xPos[1] = this.startingX;
    }
    this.xPos[0] += (VELOCITY * secondsPassed);
    this.xPos[1] += (VELOCITY * secondsPassed);
  }
}
