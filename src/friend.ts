import Controller from './controller';

import Spritesheet from '../assets/img/spritesheet.png';
import Keys from './keys';

const BOTTOM_FLOOR = 350;
const TOP_FLOOR = 250;
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
const sprites: ImageBitmap[] = [];

class Friend {
  private controller: Controller;

  private currentFrame = 0;

  constructor(
    private y: number,
    private ctx: CanvasRenderingContext2D,
  ) {
    const spritesheet = new Image();
    spritesheet.src = Spritesheet;
    this.controller = new Controller();
    spritesheet.onload = async () => {
      sprites.concat(await Promise.all(
        Array.from(
          { length: frameCount },
          (_, i) => createImageBitmap(
            spritesheet,
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
      ));
    };
  }

  draw() {
    const image = sprites[this.currentFrame % frameCount];
    if (this.controller.buttonPressed.has(Keys.DOWN)) {
      this.y = BOTTOM_FLOOR;
    } else if (this.controller.buttonPressed.has(Keys.UP)) {
      this.y = TOP_FLOOR;
    }
    this.ctx.drawImage(image, 150, this.y);
  }

  update() {

  }
}
