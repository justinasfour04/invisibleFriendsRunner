import {
  FRAME_COUNT,
  LanePositionsTypes,
  OBSTACLE_HEIGHT,
} from './constant';
import ImageCache, { CacheKey } from './imageCache';
import Obstacle from './obstacle';
import { randomNumber } from './util';

const BASE_VELOCITY = -325;

const frameRate = 6;
const frameDuration = 1000 / frameRate;

export default class Roller extends Obstacle {
  #hitbox: number[][];

  constructor(
    ctx: CanvasRenderingContext2D,
    currentLane: LanePositionsTypes,
    yPos: number,
    acceleration: number,
  ) {
    super(
      ctx,
      BASE_VELOCITY + acceleration,
      currentLane,
      yPos,
      ImageCache.getImage(randomNumber(12, 15) as CacheKey) as ImageBitmap[],
    );
    this.currentImageInAnimation = this.sprites[this.currentFrame % FRAME_COUNT];

    this.#hitbox = [
      [3, 32],
      [3, 32],
      [2, 31],
      [2, 30],
      [2, 31],
      [3, 32],
    ];
  }

  get hitbox(): number[][] {
    return this.#hitbox;
  }

  draw() {
    if (!this.lastTimeDrawn) {
      this.lastTimeDrawn = Date.now();
    }

    const currentDrawTime = Date.now();
    if (currentDrawTime - this.lastTimeDrawn > frameDuration) {
      this.currentFrame += 1;
      this.lastTimeDrawn = currentDrawTime;
    }

    if (this.ctx !== null) {
      this.currentImageInAnimation = this.sprites[this.currentFrame % FRAME_COUNT];
      // const scaleFactor = this.currentImageInAnimation.height / OBSTACLE_HEIGHT;
      // const spriteFrame = this.currentFrame % FRAME_COUNT;
      // const [startingX, endingX] = this.hitbox[spriteFrame];
      // const xLeft = this.x + (startingX * scaleFactor);
      // const xRight = this.x + (endingX * scaleFactor);
      // const hitboxWidth = xRight - xLeft;

      // this.ctx.beginPath();
      // this.ctx.lineWidth = 3;
      // this.ctx.strokeStyle = 'white';
      // this.ctx.rect(
      //   xLeft,
      //   this.y - this.currentImageInAnimation.height,
      //   hitboxWidth,
      //   this.currentImageInAnimation.width,
      // );
      // this.ctx.stroke();
      this.ctx.drawImage(
        this.currentImageInAnimation as ImageBitmap,
        this.x,
        this.y - this.currentImageInAnimation.height,
      );
    }
  }

  update(secondsPassed: number = 1): void {
    this.x += (this.velocity * secondsPassed);
  }
}
