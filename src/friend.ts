import {
  BOTTOM_FLOOR,
  FRAME_COUNT,
  TOP_FLOOR,
  ZERO_X_POS,
} from './constant';
import ImageCache, { CacheKey } from './imageCache';
import Keys from './keys';
import Obstacle from './obstacle';

export default class Friend {
  private currentFrame = 0;

  private frameCycle = 0;

  private minY: number;

  private xPos: number;

  private moved: boolean;

  private currentImageInAnimation: ImageBitmap | null;

  constructor(private ctx: CanvasRenderingContext2D | null) {
    this.minY = BOTTOM_FLOOR;
    this.moved = false;
    this.currentImageInAnimation = null;
    this.xPos = ZERO_X_POS;
  }

  checkCollision(obstacle: Obstacle | undefined) {
    if (this.currentImageInAnimation !== null && obstacle !== undefined) {
      const distanceFromObstacle = this.xPos + this.currentImageInAnimation.width - obstacle.x;
      if (distanceFromObstacle > 0) {
        if (
          (obstacle.isTopFloor && this.minY === TOP_FLOOR)
          || (!obstacle.isTopFloor && this.minY === BOTTOM_FLOOR)
        ) {
          return true;
        }
      }
    }

    return false;
  }

  passedObstacle(obstacle: Obstacle | undefined) {
    if (this.currentImageInAnimation !== null && obstacle !== undefined) {
      const distanceFromObstacle = this.xPos - (obstacle.x + obstacle.w);
      if (distanceFromObstacle > 0) {
        if (
          (obstacle.isTopFloor && this.minY === BOTTOM_FLOOR)
          || (!obstacle.isTopFloor && this.minY === TOP_FLOOR)
        ) {
          return true;
        }
      }
    }

    return false;
  }

  draw() {
    this.frameCycle += 1;
    const sprites = ImageCache.getImage(CacheKey.SPRITES) as ImageBitmap[];
    this.currentImageInAnimation = sprites[this.currentFrame % FRAME_COUNT];

    if (this.ctx !== null) {
      this.ctx.drawImage(this.currentImageInAnimation, this.xPos, this.minY);
    }

    if (this.frameCycle > FRAME_COUNT) {
      this.currentFrame += 1;
      this.frameCycle = 0;
    }
  }

  update(buttonPressed: Set<Keys | undefined>) {
    if (this.moved && !buttonPressed.has(Keys.SPACE)) {
      this.moved = false;
    } else if (!this.moved && buttonPressed.has(Keys.SPACE)) {
      this.minY = this.minY === BOTTOM_FLOOR ? TOP_FLOOR : BOTTOM_FLOOR;
      this.moved = true;
    } else if (buttonPressed.has(Keys.DOWN)) {
      this.minY = BOTTOM_FLOOR;
    } else if (buttonPressed.has(Keys.UP)) {
      this.minY = TOP_FLOOR;
    }
  }
}
