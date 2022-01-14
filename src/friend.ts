import {
  FRAME_COUNT,
  LanePositionsTypes,
  SPRITE_HEIGHT,
  ZERO_X_POS,
} from './constant';
import ImageCache, { CacheKey } from './imageCache';
import Keys from './keys';
import Obstacle from './obstacle';
import down from '../static/sound/down.mp3';
import up from '../static/sound/up.mp3';

const frameRate = 6;
const frameDuration = 1000 / frameRate;
const HITBOX = [
  [16, 50],
  [18, 46],
  [24, 40],
  [22, 49],
  [24, 44],
  [24, 41],
];

const upAudio = new Audio(up);
const downAudio = new Audio(down);

export default class Friend {
  private currentFrame = 0;

  private currentLane: LanePositionsTypes;

  private yPos: number;

  private xPos: number;

  private moved: boolean;

  private created: boolean;

  private currentImageInAnimation: ImageBitmap | null;

  private lanePositions: number[];

  private lastTimeDrawn: number | undefined;

  constructor(private ctx: CanvasRenderingContext2D | null, lanePositions: number[]) {
    this.currentLane = LanePositionsTypes.BOTTOM;
    this.yPos = lanePositions[LanePositionsTypes.BOTTOM];
    this.moved = false;
    this.created = false;
    this.currentImageInAnimation = null;
    this.xPos = ZERO_X_POS;
    this.lanePositions = lanePositions;
    this.lastTimeDrawn = undefined;
  }

  get lane() {
    return this.currentLane;
  }

  checkCollision(obstacle: Obstacle | undefined) {
    if (this.currentImageInAnimation !== null && obstacle !== undefined) {
      const scaleFactor = this.currentImageInAnimation.height / SPRITE_HEIGHT;
      const spriteFrame = this.currentFrame % FRAME_COUNT;
      const [startingX, endingX] = HITBOX[spriteFrame];
      const xLeft = this.xPos + (startingX * scaleFactor);
      const xRight = this.xPos + (endingX * scaleFactor);
      const hitboxWidth = xRight - xLeft;
      const distanceFromObstacle = obstacle.x - xRight;
      console.log(distanceFromObstacle);
      if (distanceFromObstacle >= -hitboxWidth
        && distanceFromObstacle <= 0
        && obstacle.lane === this.currentLane
      ) {
        return true;
      }
    }

    return false;
  }

  passedObstacle(obstacle: Obstacle | undefined) {
    if (this.currentImageInAnimation !== null && obstacle !== undefined) {
      const distanceFromObstacle = this.xPos - (obstacle.x + (obstacle.w ?? 0));
      if (distanceFromObstacle > 0 && obstacle.lane !== this.currentLane && !obstacle.isPassed) {
        obstacle.isPassed = true;
        return true;
      }
    }

    return false;
  }

  reset() {
    this.currentFrame = 0;
    this.yPos = this.lanePositions[LanePositionsTypes.BOTTOM]
      - (this.currentImageInAnimation?.height || 0);
    this.moved = false;
    this.currentImageInAnimation = null;
    this.xPos = ZERO_X_POS;
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
      const sprites = ImageCache.getImage(CacheKey.SPRITES) as ImageBitmap[];
      this.currentImageInAnimation = sprites[this.currentFrame % FRAME_COUNT];
      // const scaleFactor = this.currentImageInAnimation.height / SPRITE_HEIGHT;
      // const spriteFrame = this.currentFrame % FRAME_COUNT;
      // const [startingX, endingX] = HITBOX[spriteFrame];
      // const xLeft = this.xPos + (startingX * scaleFactor);
      // const xRight = this.xPos + (endingX * scaleFactor);
      // const hitboxWidth = xRight - xLeft;

      // this.ctx.beginPath();
      // this.ctx.lineWidth = 3;
      // this.ctx.strokeStyle = 'white';
      // this.ctx.rect(xLeft, this.yPos, hitboxWidth, this.currentImageInAnimation.width);
      // this.ctx.stroke();
      this.ctx.drawImage(this.currentImageInAnimation as ImageBitmap, this.xPos, this.yPos);
    }
  }

  update(buttonPressed: Set<Keys | undefined>) {
    const heightOfFriend = this.currentImageInAnimation?.height;
    if (!this.created && heightOfFriend) {
      this.created = true;
      this.yPos = this.lanePositions[this.currentLane] - (heightOfFriend || 0);
    }

    if (buttonPressed.has(Keys.DOWN)) {
      if (!this.moved) {
        downAudio.play();
        this.currentLane = this.currentLane + 1 >= LanePositionsTypes.BOTTOM + 1
          ? LanePositionsTypes.BOTTOM
          : this.currentLane + 1;
        this.yPos = this.lanePositions[this.currentLane] - (heightOfFriend || 0);
        this.moved = true;
      }
    } else if (buttonPressed.has(Keys.UP)) {
      if (!this.moved) {
        // const size = this.lanePositions.length;
        // this.currentLane = ((this.currentLane + size) - 1) % size;
        upAudio.play();
        this.currentLane = this.currentLane - 1 <= LanePositionsTypes.TOP - 1
          ? LanePositionsTypes.TOP
          : this.currentLane - 1;
        this.yPos = this.lanePositions[this.currentLane] - (heightOfFriend || 0);
        this.moved = true;
      }
    } else {
      this.moved = false;
    }
  }
}
