import '../static/stylesheet/index.css';
import Cone from '../static/img/cone.png';

import Controller from './controller';
import Friend from './friend';
import loadImage from './util';
import GameBackground from './gamebackground';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = (document.body.clientWidth / 1.1);
canvas.height = (document.body.clientHeight / 2);

const container = document.createElement('div');
container.className = 'container';

const scoreDiv = document.createElement('div');
scoreDiv.className = 'score';
const score = document.createElement('p');
score.innerText = 'Score: 0';
score.style.fontSize = '25px';
scoreDiv.appendChild(score);

const titleDiv = document.createElement('div');
titleDiv.className = 'title';
const title = document.createElement('p');
title.innerText = 'INVISIBLE FRIENDS RUNNER';
title.style.fontSize = '40px';
titleDiv.appendChild(title);

container.appendChild(titleDiv);
container.appendChild(scoreDiv);
container.appendChild(canvas);

document.body.appendChild(container);
const controller = new Controller();
const friend = new Friend(ctx);
const gameBackgroud = new GameBackground(ctx, [0, canvas.width]);
const bottomConeFloor = 390;
const topConeFloor = 355;

const cone = new Image();
cone.src = Cone;

let topConeSprite: ImageBitmap;
let bottomConeSprite: ImageBitmap;

const coneDx: number = -200;
const lineDash = [25, 30];
let now: number;
let then: number;
let elapsed: number;
let coneX = canvas.width;

function update(secondsPassed: number = 1) {
  friend.update(controller.buttonPressed);
  gameBackgroud.update(secondsPassed);
  coneX += (coneDx * secondsPassed);

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

    gameBackgroud.draw();
    friend.draw();

    if (coneX > -20) {
      ctx.drawImage(topConeSprite, coneX + 300, topConeFloor);
      ctx.drawImage(bottomConeSprite, coneX, bottomConeFloor);
    }
  }
}

async function mainLoop(frameTime?: number) {
  now = frameTime ?? window.performance.now();
  elapsed = (now - then) / 1000;
  then = frameTime ?? window.performance.now();

  update(Math.min(elapsed, 0.1));
  await draw();

  window.requestAnimationFrame(mainLoop);
}

then = window.performance.now();
(async () => {
  bottomConeSprite = await loadImage(
    Cone,
    0,
    0,
    321,
    400,
    {
      resizeQuality: 'high',
      resizeHeight: 125,
    },
  );
  topConeSprite = await loadImage(
    Cone,
    0,
    0,
    321,
    400,
    {
      resizeQuality: 'high',
      resizeHeight: 100,
    },
  );
  await gameBackgroud.init();
  await friend.init();
  await mainLoop();
})();
