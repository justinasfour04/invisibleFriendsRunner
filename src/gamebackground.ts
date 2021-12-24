import Background from '../static/img/background.png';
import loadImage from './util';

const VELOCITY = -60;

export default class GameBackground {
  private startingX: number;

  private gameBackground: ImageBitmap | null;

  constructor(private ctx: CanvasRenderingContext2D | null, private xPos: [number, number]) {
    [, this.startingX] = xPos;
    this.gameBackground = null;
  }

  async init() {
    this.gameBackground = await loadImage(
      Background,
      0,
      0,
      2560,
      706,
      {
        resizeQuality: 'high',
        resizeWidth: this.startingX + 60,
        resizeHeight: 410,
      },
    );
  }

  draw() {
    if (this.ctx !== null && this.gameBackground !== null) {
      this.ctx.drawImage(this.gameBackground, this.xPos[0], 0);
      this.ctx.drawImage(this.gameBackground, this.xPos[1], 0);
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
