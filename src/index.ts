import '../static/stylesheet/index.css';

import Controller from './controller';
import Friend from './friend';
import GameBackground from './gamebackground';
import GameState from './gameState';
import ImageCache from './imageCache';
import ObstacleFactory from './obstacleFactory';
import { randomNumber } from './util';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = (document.body.clientWidth / 1.1);
canvas.height = (document.body.clientHeight / 2);

const gameState = new GameState();
const controller = new Controller(canvas);
const friend = new Friend(ctx);
const gameBackgroud = new GameBackground(ctx, [0, canvas.width]);
const obstacleFactory = new ObstacleFactory(ctx);

const lineDash = [25, 30];
let then: number;
let elapsed: number;

function saveHighscore() {
  localStorage.setItem('highscore', Math.max(gameState.score, gameState.highscore).toString(10));
}

function update(secondsPassed: number = 1) {
  friend.update(controller.buttonPressed);
  gameBackgroud.update(secondsPassed);
  obstacleFactory.update(secondsPassed);
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
    obstacleFactory.drawTop();
    friend.draw();
    obstacleFactory.drawBottom();
  }
}

function drawGameScreen() {
  document.body.firstElementChild?.remove();
  const container = document.createElement('div');
  container.className = 'container';

  const scoreDiv = document.createElement('div');
  scoreDiv.className = 'score';

  const scoreText = document.createElement('p');
  scoreText.className = 'scoreText';
  scoreText.id = '_score';

  const highscoreText = document.createElement('p');
  highscoreText.className = 'scoreText';
  highscoreText.id = '_highscore';

  scoreDiv.appendChild(scoreText);
  scoreDiv.appendChild(highscoreText);

  const titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  const titleText = document.createElement('p');
  titleText.className = 'titleText';
  titleText.innerText = 'INVISIBLE FRIENDS RUNNER';
  titleDiv.appendChild(titleText);

  container.appendChild(titleDiv);
  container.appendChild(scoreDiv);
  container.appendChild(canvas);

  document.body.appendChild(container);
}

function drawGameMenu() {
  document.body.firstElementChild?.remove();
  const container = document.createElement('div');
  container.className = 'container';

  const menuTitle = document.createElement('p');
  menuTitle.className = 'menu_title';
  menuTitle.innerText = 'INVISIBLE FRIENDS RUNNER';

  const startButton = document.createElement('button');
  startButton.className = 'action_button';
  startButton.textContent = 'START';
  startButton.addEventListener('mouseover', () => {
    startButton.textContent = 'BING BONG';
  });
  startButton.addEventListener('mouseleave', () => {
    startButton.textContent = 'START';
  });
  startButton.addEventListener('click', () => {
    gameState.isGameMenuDrawn = false;
    gameState.isGameScreenDrawn = false;
    gameState.isGameOverDrawn = false;
    gameState.isInMenu = false;
    gameState.isGameRunning = true;
    gameState.isGameOver = false;
  });

  startButton.addEventListener('touchstart', (event) => {
    event.preventDefault();
    startButton.textContent = 'BING BONG';
  });
  startButton.addEventListener('touchmove', (event) => {
    event.preventDefault();
  });
  startButton.addEventListener('touchend', (event) => {
    event.preventDefault();
    gameState.isGameMenuDrawn = false;
    gameState.isGameScreenDrawn = false;
    gameState.isGameOverDrawn = false;
    gameState.isInMenu = false;
    gameState.isGameRunning = true;
    gameState.isGameOver = false;
  });

  container.appendChild(menuTitle);
  container.appendChild(startButton);
  document.body.appendChild(container);
}

function drawGameOverScreen() {
  document.body.firstElementChild?.remove();
  const container = document.createElement('div');
  container.className = 'container';

  const gameoverTitle = document.createElement('p');
  gameoverTitle.className = 'menu_title';
  gameoverTitle.innerText = 'GAME OVER!!!!';

  const playagainButton = document.createElement('button');
  playagainButton.className = 'action_button';
  playagainButton.textContent = 'PLAY AGAIN';
  playagainButton.addEventListener('mouseover', () => {
    playagainButton.textContent = 'BING BONG';
  });
  playagainButton.addEventListener('mouseleave', () => {
    playagainButton.textContent = 'START';
  });
  playagainButton.addEventListener('click', () => {
    gameState.isGameMenuDrawn = false;
    gameState.isGameScreenDrawn = false;
    gameState.isGameOverDrawn = false;
    gameState.isInMenu = false;
    gameState.isGameRunning = true;
    gameState.isGameOver = false;
  });

  playagainButton.addEventListener('touchstart', (event) => {
    event.preventDefault();
    playagainButton.textContent = 'BING BONG';
  });
  playagainButton.addEventListener('touchmove', (event) => {
    event.preventDefault();
  });
  playagainButton.addEventListener('touchend', (event) => {
    event.preventDefault();
    gameState.isGameMenuDrawn = false;
    gameState.isGameScreenDrawn = false;
    gameState.isGameOverDrawn = false;
    gameState.isInMenu = false;
    gameState.isGameRunning = true;
    gameState.isGameOver = false;
  });

  container.appendChild(gameoverTitle);
  container.appendChild(playagainButton);
  document.body.appendChild(container);
}

function setScore() {
  const closestTopObstacle = obstacleFactory.getClosestObstacle(true);
  const cloestBottomObstacle = obstacleFactory.getClosestObstacle(false);

  const topObstaclePassed = friend.passedObstacle(closestTopObstacle);
  const bottomObstaclePassed = friend.passedObstacle(cloestBottomObstacle);

  const isCollision = friend.checkCollision(closestTopObstacle)
    || friend.checkCollision(cloestBottomObstacle);

  if ((topObstaclePassed || bottomObstaclePassed) && !isCollision) {
    gameState.score += 1;
  }

  if (topObstaclePassed) {
    obstacleFactory.deleteOldestObstacle(true);
  }

  if (bottomObstaclePassed) {
    obstacleFactory.deleteOldestObstacle(false);
  }

  const highscoreValue = document.createElement('span');
  highscoreValue.textContent = gameState.highscore.toString(10);
  const highscore = document.getElementById('_highscore');
  if (highscore) {
    highscore.innerHTML = `High Score: ${highscoreValue.innerHTML}`;
  }

  const scoreValue = document.createElement('span');
  scoreValue.textContent = gameState.score.toString(10);
  const score = document.getElementById('_score');
  if (score) {
    score.innerHTML = `Score: ${scoreValue.innerHTML}`;
  }
}

function youCrashed() {
  const closestTopObstacle = obstacleFactory.getClosestObstacle(true);
  const cloestBottomObstacle = obstacleFactory.getClosestObstacle(false);
  return friend.checkCollision(closestTopObstacle)
    || friend.checkCollision(cloestBottomObstacle);
}

function resetGame() {
  friend.reset();
  gameBackgroud.reset();
  obstacleFactory.reset();
}

async function mainLoop(frameTime?: number) {
  if (frameTime) {
    if (!then) {
      then = frameTime;
    }
    elapsed = (frameTime - then) / 1000;

    if (gameState.isGameRunning) {
      if (!gameState.isGameScreenDrawn) {
        drawGameScreen();
        gameState.isGameScreenDrawn = true;
      }

      if (youCrashed()) {
        saveHighscore();
        resetGame();
        gameState.isGameOver = true;
        gameState.isGameRunning = false;
      } else {
        setScore();
        update(Math.min(elapsed, 0.1));
        obstacleFactory.create(randomNumber(0, 1000) % 2 === 0);
        await draw();
      }
    } else if (gameState.isGameOver) {
      if (!gameState.isGameOverDrawn) {
        drawGameOverScreen();
        gameState.isGameOverDrawn = true;
      }
    } else if (gameState.isInMenu) {
      if (!gameState.isGameMenuDrawn) {
        drawGameMenu();
        gameState.isGameMenuDrawn = true;
      }
    }

    then = frameTime;
    window.requestAnimationFrame(mainLoop);
  } else {
    window.requestAnimationFrame(mainLoop);
  }
}

(async () => {
  await ImageCache.loadAllImages(canvas);
  await mainLoop();
})();
