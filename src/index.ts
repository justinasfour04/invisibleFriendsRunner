
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/stylesheet/index.css';
import { LanePositionsTypes } from './constant';

import BGM from '../static/sound/BGM.wav';
// import mysteryBGM from '../static/sound/mysteryBGM.mp3';
import trip from '../static/sound/trip.mp3';

import GameMenu from './pages/GameMenu.html';
import GameMenuNameSaved from './pages/GameMenuNameSaved.html';
import GameOverScreen from './pages/GameOverScreen.html';
import LeaderBoard from './pages/LeaderBoard.html';
import MainMenuImg from '../static/img/mainmenu.gif';

import Controller from './controller';
import Friend from './friend';
import GameBackground from './gamebackground';
import GameState from './gameState';
import ImageCache from './imageCache';
import ObstacleFactory from './obstacleFactory';
import { randomNumber } from './util';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
(ctx as CanvasRenderingContext2D).imageSmoothingEnabled = false;
canvas.width = (document.body.clientWidth / 1.1);
canvas.height = (document.body.clientHeight / 1.2);

const moveUp = document.createElement('div');
moveUp.className = 'moveUp';
const moveDown = document.createElement('div');
moveDown.className = 'moveDown';

const SPEED_UP_TIME = 10 * 1000;
const lanePositions = [
  (14 * (canvas.height / 16)),
  (15 * (canvas.height / 16)),
  (16 * (canvas.height / 16)),
];

const gameState = new GameState();
const controller = new Controller(canvas, moveUp, moveDown);
const friend = new Friend(ctx, lanePositions);
const gameBackgroud = new GameBackground(ctx, [0, canvas.width]);
const obstacleFactory = new ObstacleFactory(ctx, lanePositions);
// const backgroundMusic = new Audio(mysteryBGM);
const menuMusic = new Audio(BGM);
menuMusic.loop = true;
const gameoverSound = new Audio(trip);
// backgroundMusic.loop = true;

let then: number;
let elapsed: number;
let speedUpTimeStart: number;
let acceleration = 0;

const url = 'https://lit-shelf-93432.herokuapp.com';

async function saveHighscore() {
  // const playerName = localStorage.getItem('playername');
  const highscore = Math.max(gameState.score, gameState.highscore);
  localStorage.setItem('highscore', highscore.toString(10));
  // if (playerName) {
  //   await fetch(
  //     `${url}/scores`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         playerName,
  //         score: highscore,
  //       }),
  //     },
  //   );
  // }
}

async function initializeHighscore() {
  // const playerName = localStorage.getItem('playername');
  gameState.highscore = parseInt(localStorage.getItem('highscore') ?? '0', 10);
  // const getRequest = await fetch(
  //   `${url}/scores/${playerName}`,
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
  // );
  // const {
  //   results,
  // } = await getRequest.json() as { results: [{ player_name: string; score: number }] };
  // if (results.length) {
  //   gameState.highscore = results[0].score;
  // }
}

function addLeaderboardEventListener() {
  const leaderboardButton = document.querySelector('[leaderboard]');
  if (leaderboardButton) {
    leaderboardButton.addEventListener('click', () => {
      drawLeaderboard();
    });

    leaderboardButton.addEventListener('touchstart', (event) => {
      event.preventDefault();
    });
    leaderboardButton.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    leaderboardButton.addEventListener('touchend', (event) => {
      event.preventDefault();
      drawLeaderboard();
    });
  }
}

function addStartAndLeaderboardEventListener() {
  const startButton = document.querySelector('[start]');
  if (startButton) {
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
  }

  const leaderboardButton = document.querySelector('[leaderboard]');
  if (leaderboardButton) {
    leaderboardButton.addEventListener('click', () => {
      drawLeaderboard();
    });

    leaderboardButton.addEventListener('touchstart', (event) => {
      event.preventDefault();
    });
    leaderboardButton.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    leaderboardButton.addEventListener('touchend', (event) => {
      event.preventDefault();
      drawLeaderboard();
    });
  }
}

function update(secondsPassed: number = 1) {
  friend.update(controller.buttonPressed);
  gameBackgroud.update(secondsPassed);
  obstacleFactory.update(secondsPassed);
}

async function draw() {
  if (ctx !== null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.fillStyle = '#b7ada3';
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
    ctx.restore();

    gameBackgroud.draw();
    switch (friend.lane) {
      case LanePositionsTypes.TOP: {
        obstacleFactory.draw(LanePositionsTypes.TOP);
        friend.draw();
        obstacleFactory.draw(LanePositionsTypes.MIDDLE);
        obstacleFactory.draw(LanePositionsTypes.BOTTOM);
        break;
      }
      case LanePositionsTypes.MIDDLE: {
        obstacleFactory.draw(LanePositionsTypes.TOP);
        obstacleFactory.draw(LanePositionsTypes.MIDDLE);
        friend.draw();
        obstacleFactory.draw(LanePositionsTypes.BOTTOM);
        break;
      }
      default: {
        obstacleFactory.draw(LanePositionsTypes.TOP);
        obstacleFactory.draw(LanePositionsTypes.MIDDLE);
        obstacleFactory.draw(LanePositionsTypes.BOTTOM);
        friend.draw();
        break;
      }
    }
  }
}

function drawGameScreen() {
  const container = document.getElementById('app');
  if (container !== null) {
    container.innerHTML = '';
    // backgroundMusic.play();

    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score';
    scoreDiv.style.width = canvas.width.toString(10);

    const scoreText = document.createElement('p');
    scoreText.className = 'scoreText';
    scoreText.id = '_score';

    const highscoreText = document.createElement('p');
    highscoreText.className = 'scoreText';
    highscoreText.id = '_highscore';

    scoreDiv.appendChild(scoreText);
    scoreDiv.appendChild(highscoreText);

    container.appendChild(scoreDiv);
    container.appendChild(canvas);

    const moveWrapper = document.createElement('div');
    moveWrapper.style.width = canvas.width.toString(10);
    moveWrapper.classList.add('d-flex', 'flex-column', 'align-items-center');
    moveWrapper.appendChild(moveUp);
    moveWrapper.appendChild(moveDown);
    container.appendChild(moveWrapper);
  }
}

async function drawLeaderboard() {
  const response = await fetch(`${url}/scores`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let results: { player_name: string, score: number }[] = [];
  ({
    results,
  } = await response.json());
  document.getElementsByClassName('container')[0].classList.remove('align-items-center');
  const container = document.getElementById('app');
  if (container !== null) {
    container.innerHTML = LeaderBoard;

    const goBackButton = document.getElementById('leaderboardBack');
    if (goBackButton) {
      goBackButton.addEventListener('click', () => {
        drawGameMenu();
      });

      goBackButton.addEventListener('touchstart', (event) => {
        event.preventDefault();
      });
      goBackButton.addEventListener('touchmove', (event) => {
        event.preventDefault();
      });
      goBackButton.addEventListener('touchend', (event) => {
        event.preventDefault();
        drawGameMenu();
      });
    }

    container.style.width = '100%';
    const board = document.getElementById('board');
    results.sort((a, b) => b.score - a.score);
    for (const player of results) {
      const tr = document.createElement('tr');
      const playerName = document.createElement('td');
      playerName.textContent = player.player_name;
      const score = document.createElement('td');
      score.textContent = player.score.toString(10);
      tr.appendChild(playerName);
      tr.appendChild(score);
      board?.appendChild(tr);
    }
  }
}

function drawWithNamePicked(container: HTMLDivElement, playerName: string) {
  const menuimg = document.getElementById('menuimg') as HTMLImageElement;
  const menuimgflip = document.getElementById('menuimgflip') as HTMLImageElement;
  if (menuimg) {
    menuimg.src = MainMenuImg;
  }

  if (menuimgflip) {
    menuimgflip.src = MainMenuImg;
  }

  const startText = document.getElementById('start-text');
  if (startText) {
    startText.innerHTML = `<span><b style="color: green;">${playerName}</b> Are you ready to begin your journey?</span>`;
  }

  const newNameButton = document.getElementById('new-name') as HTMLButtonElement;
  if (newNameButton) {
    newNameButton.addEventListener('click', () => {
      localStorage.setItem('playername', '');
      gameState.playerName = undefined;
      drawGameMenu();
    });

    newNameButton.addEventListener('touchstart', (event) => {
      event.preventDefault();
    });
    newNameButton.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    newNameButton.addEventListener('touchend', (event) => {
      event.preventDefault();
      localStorage.setItem('playername', '');
      gameState.playerName = undefined;
      drawGameMenu();
    });
  }
}

function drawGameMenu() {
  const container = document.getElementById('app') as HTMLDivElement;
  if (container !== null) {
    container.innerHTML = gameState.playerName ? GameMenuNameSaved : GameMenu;

    const menuimg = document.getElementById('menuimg') as HTMLImageElement;
    const menuimgflip = document.getElementById('menuimgflip') as HTMLImageElement;
    if (menuimg) {
      menuimg.src = MainMenuImg;
    }

    if (menuimgflip) {
      menuimgflip.src = MainMenuImg;
    }

    if (!gameState.playerName) {
      addLeaderboardEventListener();
      const submitButton = document.getElementById('submitScore');
      const playerName = document.getElementById('playername') as HTMLInputElement;

      const submitCallback = async () => {
        localStorage.setItem('playername', playerName.value);
        gameState.playerName = playerName.value;
        initializeHighscore();
        container.innerHTML = GameMenuNameSaved;
        addStartAndLeaderboardEventListener();
        drawWithNamePicked(container, playerName.value);
      };

      if (submitButton) {
        submitButton.addEventListener('click', submitCallback);
        submitButton.addEventListener('touchstart', (event) => {
          event.preventDefault();
        });
        submitButton.addEventListener('touchmove', (event) => {
          event.preventDefault();
        });
        submitButton.addEventListener('touchend', async (event) => {
          event.preventDefault();
          await submitCallback();
        });
      }
    } else {
      addStartAndLeaderboardEventListener();
      initializeHighscore();
      drawWithNamePicked(container, gameState.playerName);
    }
  }
}

function drawGameOverScreen() {
  const container = document.getElementById('app');
  if (container !== null) {
    container.innerHTML = GameOverScreen;

    const playagainButton = document.querySelector('[playagain]');
    if (playagainButton) {
      playagainButton.addEventListener('mouseover', () => {
        playagainButton.textContent = 'BING BONG';
      });
      playagainButton.addEventListener('mouseleave', () => {
        playagainButton.textContent = 'PLAY AGAIN';
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
    }

    const mainmenuButton = document.getElementById('main-menu');
    if (mainmenuButton) {
      mainmenuButton.addEventListener('click', () => {
        gameState.isGameMenuDrawn = false;
        gameState.isGameScreenDrawn = false;
        gameState.isGameOverDrawn = false;
        gameState.isInMenu = true;
        gameState.isGameRunning = false;
        gameState.isGameOver = false;
      });

      mainmenuButton.addEventListener('touchstart', (event) => {
        event.preventDefault();
      });
      mainmenuButton.addEventListener('touchmove', (event) => {
        event.preventDefault();
      });
      mainmenuButton.addEventListener('touchend', (event) => {
        event.preventDefault();
        gameState.isGameMenuDrawn = false;
        gameState.isGameScreenDrawn = false;
        gameState.isGameOverDrawn = false;
        gameState.isInMenu = true;
        gameState.isGameRunning = false;
        gameState.isGameOver = false;
      });
    }
  }
}

function setScore() {
  const closestObstacle = obstacleFactory.getClosestObstacle();
  const obstaclePassed = friend.passedObstacle(closestObstacle);
  const isCollision = friend.checkCollision(obstacleFactory.getClosestObstacleIn(friend.lane));

  if (obstaclePassed && !isCollision) {
    gameState.score += 1;
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
  return friend.checkCollision(obstacleFactory.getClosestObstacleIn(friend.lane));
}

function resetGame() {
  acceleration = 0;
  gameState.score = 0;
  gameState.highscore = parseInt(localStorage.getItem('highscore') ?? '0', 10);
  // backgroundMusic.currentTime = 0;
  friend.reset();
  gameBackgroud.reset();
  obstacleFactory.reset();
}

// async function mainLoopOnlyGame(frameTime?: number) {
//   if (frameTime) {
//     if (!then) {
//       then = frameTime;
//     }
//     elapsed = (frameTime - then) / 1000;

//     if (!gameState.isGameScreenDrawn) {
//       drawGameScreen();
//       gameState.isGameScreenDrawn = true;
//     }

//     setScore();
//     update(Math.min(elapsed, 0.1));
//     obstacleFactory.create(randomNumber(0, 1000) % 3, acceleration);
//     await draw();

//     then = frameTime;
//     window.requestAnimationFrame(mainLoopOnlyGame);
//   } else {
//     window.requestAnimationFrame(mainLoopOnlyGame);
//   }
// }

async function mainLoop(frameTime?: number) {
  if (frameTime) {
    if (!then) {
      then = frameTime;
    }
    elapsed = (frameTime - then) / 1000;

    if (gameState.isGameRunning) {
      if (!gameState.isGameScreenDrawn) {
        speedUpTimeStart = frameTime;
        drawGameScreen();
        gameState.isGameScreenDrawn = true;
        menuMusic.currentTime = 0;
        menuMusic.pause();
      }

      if (youCrashed()) {
        saveHighscore();
        resetGame();
        gameState.isGameOver = true;
        gameState.isGameRunning = false;
        gameoverSound.play();
      } else {
        setScore();
        obstacleFactory.deleteOldestObstacles();
        if (frameTime - speedUpTimeStart >= SPEED_UP_TIME) {
          speedUpTimeStart = frameTime;
          acceleration -= 10;
        }
        update(Math.min(elapsed, 0.1));
        obstacleFactory.create(randomNumber(0, 1000) % 3, acceleration);
        await draw();
      }
    } else if (gameState.isGameOver) {
      if (!gameState.isGameOverDrawn) {
        drawGameOverScreen();
        gameState.isGameOverDrawn = true;
        // backgroundMusic.pause();
      }
    } else if (gameState.isInMenu) {
      if (!gameState.isGameMenuDrawn) {
        drawGameMenu();
        gameState.isGameMenuDrawn = true;
        // menuMusic.play();
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
  // await mainLoopOnlyGame();
})();
