import {
  FRAME_COUNT,
  LanePositionsTypes,
  ZERO_X_POS,
} from './constant';
import ImageCache, { CacheKey } from './imageCache';
import Keys from './keys';
import Obstacle from './obstacle';

export default class Friend {
  private currentFrame = 0;

  private frameCycle = 0;

  private currentLane: LanePositionsTypes;

  private yPos: number;

  private xPos: number;

  private moved: boolean;

  private created: boolean;

  private currentImageInAnimation: ImageBitmap | null;

  private lanePositions: number[];

  constructor(private ctx: CanvasRenderingContext2D | null, lanePositions: number[]) {
    this.currentLane = LanePositionsTypes.BOTTOM;
    this.yPos = lanePositions[LanePositionsTypes.BOTTOM];
    this.moved = false;
    this.created = false;
    this.currentImageInAnimation = null;
    this.xPos = ZERO_X_POS;
    this.lanePositions = lanePositions;
  }

  get lane() {
    return this.currentLane;
  }

  checkCollision(obstacle: Obstacle | undefined) {
    if (this.currentImageInAnimation !== null && obstacle !== undefined) {
      const distanceFromObstacle = (this.xPos + this.currentImageInAnimation.width) - obstacle.x;
      if (distanceFromObstacle > 0) {
        if (obstacle.lane === this.currentLane) {
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
        if (obstacle.lane !== this.currentLane) {
          return true;
        }
      }
    }

    return false;
  }

  reset() {
    this.frameCycle = 0;
    this.currentFrame = 0;
    this.yPos = this.lanePositions[LanePositionsTypes.BOTTOM]
      - (this.currentImageInAnimation?.height || 0);
    this.moved = false;
    this.currentImageInAnimation = null;
    this.xPos = ZERO_X_POS;
  }

  draw() {
    this.frameCycle += 1;
    const sprites = ImageCache.getImage(CacheKey.SPRITES) as ImageBitmap[];
    this.currentImageInAnimation = sprites[this.currentFrame % FRAME_COUNT];

    if (this.ctx !== null) {
      this.ctx.drawImage(this.currentImageInAnimation, this.xPos, this.yPos);
    }

    if (this.frameCycle > FRAME_COUNT * 0.7) {
      this.currentFrame += 1;
      this.frameCycle = 0;
    }
  }

  update(buttonPressed: Set<Keys | undefined>) {
    const heightOfFriend = this.currentImageInAnimation?.height;
    if (!this.created && heightOfFriend) {
      this.created = true;
      this.yPos = this.lanePositions[this.currentLane] - (heightOfFriend || 0);
    }

    if (this.moved) {
      this.moved = false;
    } else if (!this.moved && buttonPressed.has(Keys.SPACE)) {
      this.currentLane = (this.currentLane + 1) % this.lanePositions.length;
      this.yPos = this.lanePositions[this.currentLane] - (heightOfFriend || 0);
      this.moved = true;
    } else if (!this.moved && buttonPressed.has(Keys.DOWN)) {
      this.currentLane = (this.currentLane + 1) % this.lanePositions.length;
      this.yPos = this.lanePositions[this.currentLane] - (heightOfFriend || 0);
    } else if (!this.moved && buttonPressed.has(Keys.UP)) {
      this.currentLane = Math.abs(-this.currentLane - 1) % this.lanePositions.length;
      this.yPos = this.lanePositions[this.currentLane] - (heightOfFriend || 0);
    }
  }
}
