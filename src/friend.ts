import Spritesheet from '../static/img/spritesheet.png';
import Keys from './keys';
import loadImage from './util';

const TOP_FLOOR = 200;
const BOTTOM_FLOOR = 250;
const spriteWidth = 280;
const spriteHeight = 430;
const frameCount = 18;
const spriteWidths = [
  246,
  180,
  211,
  211,
  197,
  277,
  216,
  191,
  230,
  234,
  208,
  207,
  273,
  208,
  195,
  234,
  185,
  243,
];

export default class Friend {
  private currentFrame = 0;

  private frameCycle = 0;

  private minY: number;

  private sprites: ImageBitmap[];

  constructor(private ctx: CanvasRenderingContext2D | null) {
    this.minY = BOTTOM_FLOOR;
    this.sprites = [];
  }

  async init() {
    this.sprites = await Promise.all(
      Array.from(
        { length: frameCount },
        (_, i) => loadImage(
          Spritesheet,
          (i % frameCount) * spriteWidth,
          0,
          spriteWidths[i % frameCount],
          spriteHeight,
          {
            resizeQuality: 'high',
            resizeHeight: 250,
          },
        ),
      ),
    );
  }

  draw() {
    this.frameCycle += 1;
    const image = this.sprites[this.currentFrame % frameCount];

    if (this.ctx !== null) {
      this.ctx.drawImage(image, 150, this.minY);
    }

    if (this.frameCycle > frameCount * 2) {
      this.currentFrame += 1;
      this.frameCycle = 0;
    }
  }

  update(buttonPressed: Set<Keys | undefined>) {
    if (buttonPressed.has(Keys.DOWN)) {
      this.minY = BOTTOM_FLOOR;
    } else if (buttonPressed.has(Keys.UP)) {
      this.minY = TOP_FLOOR;
    }
  }
}
