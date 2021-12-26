import { BOTTOM_OBSTACLE, TOP_OBSTACLE } from './constant';
import ImageCache, { CacheKey } from './imageCache';
import Obstacle from './obstacle';

const VELOCITY = -150;

export default class Cone extends Obstacle {
  constructor(ctx: CanvasRenderingContext2D, isTopFloor: boolean) {
    const cone = ImageCache.getImage(
      isTopFloor ? CacheKey.TOP_CONE : CacheKey.BOTTOM_CONE,
    ) as ImageBitmap;
    super(ctx, cone.width, VELOCITY, isTopFloor ? 1 : 2);
  }

  draw(): void {
    const cone = ImageCache.getImage(
      this.isTopFloor ? CacheKey.TOP_CONE : CacheKey.BOTTOM_CONE,
    ) as ImageBitmap;
    this.ctx.drawImage(cone, this.x, this.isTopFloor ? TOP_OBSTACLE : BOTTOM_OBSTACLE);
  }

  update(secondsPassed: number = 1): void {
    this.x += (this.velocity * secondsPassed);
  }
}
