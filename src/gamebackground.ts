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

  reset() {
    if (this.ctx !== null) {
      this.xPos = [0, this.ctx.canvas.width];
    }
  }

  draw() {
    const gameBackground = ImageCache.getImage(CacheKey.BACKGROUND) as ImageBitmap;
    const clouds = ImageCache.getImage(CacheKey.CLOUDS) as ImageBitmap;
    if (this.ctx !== null) {
      this.ctx.drawImage(clouds, 0, -10);
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
