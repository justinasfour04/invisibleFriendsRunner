import '../assets/stylesheet/index.css';
import Spritesheet from '../assets/img/spritesheet.png';
import Cone from '../assets/img/cone.png';
import Background from '../assets/img/background.png';

import Controller from './controller';
import Keys from './keys';

// const sleep = (delay: number) => new Promise((resolve) => { setTimeout(resolve, delay); });
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = (document.body.clientWidth / 1.1);
canvas.height = (document.body.clientHeight / 2);

const container = document.createElement('div');
container.className = 'container';

container.appendChild(canvas);

document.body.appendChild(container);
const controller = new Controller();
const bottomFriendFloor = 250;
const topFriendFloor = 200;
const bottomConeFloor = 390;
const topConeFloor = 355;

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
const spritesheet = new Image();
spritesheet.src = Spritesheet;
const cone = new Image();
cone.src = Cone;
const backgroundImage = new Image();
backgroundImage.src = Background;

let sprites: ImageBitmap[];
let topConeSprite: ImageBitmap;
let bottomConeSprite: ImageBitmap;
let background: ImageBitmap;
const spriteWidth = 280;
const spriteHeight = 430;
const frameCount = 18;

const fps = 10;
const fpsInterval: number = 1000 / fps;
const coneDx: number = -20;
const backgroundDx = -6;
const backgroundXs = [0, canvas.width];
const lineDash = [25, 30];
let currentFrame = 0;
let now: number;
let then: number;
let elapsed: number;
let coneX = canvas.width;
let floor = bottomFriendFloor;

function drawFrame(image: ImageBitmap, buttonPressed: Set<Keys | undefined>): void {
  if (buttonPressed.has(Keys.DOWN)) {
    floor = bottomFriendFloor;
  } else if (buttonPressed.has(Keys.UP)) {
    floor = topFriendFloor;
  }
  ctx?.drawImage(image, 150, floor);
}

function update(secondsPassed: number = 1) {
  coneX += (coneDx * secondsPassed);
  if (backgroundXs[1] <= 0) {
    [backgroundXs[1], backgroundXs[0]] = [backgroundXs[0], backgroundXs[1]];
    backgroundXs[1] = canvas.width;
  }
  backgroundXs[0] += (backgroundDx * secondsPassed);
  backgroundXs[1] += (backgroundDx * secondsPassed);

  if (coneX < -20) {
    coneX = canvas.width;
  }
}

async function draw() {
  if (ctx !== null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'black';

    ctx.save();
    ctx.setLineDash([0]);
    ctx.beginPath();
    ctx.lineTo(canvas.width, 409);
    ctx.moveTo(0, 409);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.setLineDash(lineDash);
    ctx.beginPath();
    ctx.moveTo(0, 460);
    ctx.lineTo(canvas.width, 460);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = '#0083A3';
    ctx.rect(0, 0, canvas.width, 410);
    ctx.fill();
    ctx.restore();

    ctx.drawImage(background, backgroundXs[0], 0);
    ctx.drawImage(background, backgroundXs[1], 0);
    const image = sprites[currentFrame % frameCount];
    drawFrame(image, controller.buttonPressed);

    if (coneX > -20) {
      ctx.drawImage(topConeSprite, coneX + 300, topConeFloor);
      ctx.drawImage(bottomConeSprite, coneX, bottomConeFloor);
    }

    currentFrame += 1;
  }
}

async function mainLoop(frameTime?: number) {
  window.requestAnimationFrame(mainLoop);
  now = frameTime ?? window.performance.now();
  elapsed = (now - then);

  then = now - (elapsed % fpsInterval);

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    update();

    await draw();
  }
}

then = window.performance.now();
spritesheet.onload = async () => {
  background = await createImageBitmap(
    backgroundImage,
    0,
    0,
    2560,
    706,
    {
      resizeQuality: 'high',
      resizeWidth: canvas.width + 60,
      resizeHeight: 410,
    },
  );
  bottomConeSprite = await createImageBitmap(
    cone,
    0,
    0,
    321,
    400,
    {
      resizeQuality: 'high',
      resizeHeight: 125,
    },
  );
  topConeSprite = await createImageBitmap(
    cone,
    0,
    0,
    321,
    400,
    {
      resizeQuality: 'high',
      resizeHeight: 100,
    },
  );
  sprites = await Promise.all(
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
  );
  await mainLoop();
};
