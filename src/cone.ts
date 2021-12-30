import { LanePositionsTypes } from './constant';
import ImageCache, { CacheKey } from './imageCache';
import Obstacle from './obstacle';

const VELOCITY = -325;

function getCacheKey(lane: LanePositionsTypes) {
  switch (lane) {
    case LanePositionsTypes.TOP: {
      return CacheKey.TOP_CONE;
    }
    case LanePositionsTypes.MIDDLE: {
      return CacheKey.MIDDLE_CONE;
    }
    case LanePositionsTypes.BOTTOM: {
      return CacheKey.BOTTOM_CONE;
    }
    default: {
      return CacheKey.BOTTOM_CONE;
    }
  }
}

export default class Cone extends Obstacle {
  constructor(ctx: CanvasRenderingContext2D, currentLane: LanePositionsTypes, yPos: number) {
    const cone = ImageCache.getImage(getCacheKey(currentLane)) as ImageBitmap;
    super(ctx, cone.width, VELOCITY, currentLane, yPos);
  }

  draw(): void {
    const cone = ImageCache.getImage(getCacheKey(this.lane)) as ImageBitmap;
    this.ctx.drawImage(cone, this.x, this.y - cone.height);
  }

  update(secondsPassed: number = 1): void {
    this.x += (this.velocity * secondsPassed);
  }
}
