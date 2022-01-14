import Spritesheet from '../static/img/pixelspritesheet.png';
import Background from '../static/img/background.png';
import Clouds from '../static/img/clouds.png';
import BlackHood from '../static/img/black_hood.png';
import BlackRoller from '../static/img/black_roller.png';
import BlueRoller from '../static/img/blue_roller.png';
import DoomHood from '../static/img/doom_hood.png';
import GreenHood from '../static/img/green_hood.png';
import GreenRoller from '../static/img/green_roller.png';
import PinkHood from '../static/img/pink_hood.png';
import PinkRoller from '../static/img/pink_roller.png';
import RedHood from '../static/img/red_hood.png';
import WhiteHood from '../static/img/white_hood.png';
import { loadImage } from './util';
import {
  FRAME_COUNT,
  OBSTACLE_HEIGHT,
  OBSTACLE_WIDTH,
  SPRITE_HEIGHT,
  SPRITE_WIDTH,
} from './constant';

type CacheValue = ImageBitmap | Array<ImageBitmap>;

export enum CacheKey {
  TOP_CONE,
  MIDDLE_CONE,
  BOTTOM_CONE,
  BACKGROUND,
  SPRITES,
  CLOUDS,
  BLACK_HOOD,
  DOOM_HOOD,
  GREEN_HOOD,
  PINK_HOOD,
  RED_HOOD,
  WHITE_HOOD,
  BLACK_ROLLER,
  BLUE_ROLLER,
  GREEN_ROLLER,
  PINK_ROLLER,
}

const cache: Map<CacheKey, CacheValue> = new Map();

export default class ImageCache {
  static async loadAllImages(canvas: HTMLCanvasElement) {
    cache.set(CacheKey.BACKGROUND, await loadImage(
      Background,
      0,
      0,
      2560,
      706,
      {
        resizeQuality: 'pixelated',
        resizeWidth: canvas.width + 60,
        resizeHeight: 13 * (canvas.height / 16),
      },
    ));

    cache.set(CacheKey.CLOUDS, await loadImage(
      Clouds,
      0,
      0,
      397,
      189,
      {
        resizeQuality: 'pixelated',
        resizeWidth: canvas.width + 60,
        resizeHeight: 13 * (canvas.height / 16),
      },
    ));

    cache.set(CacheKey.SPRITES, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          Spritesheet,
          (i % FRAME_COUNT) * SPRITE_WIDTH,
          0,
          SPRITE_WIDTH,
          SPRITE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 3),
          },
        ),
      ),
    ));

    cache.set(CacheKey.BLACK_HOOD, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          BlackHood,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.BLACK_ROLLER, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          BlackRoller,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.BLUE_ROLLER, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          BlueRoller,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.DOOM_HOOD, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          DoomHood,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.GREEN_HOOD, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          GreenHood,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.GREEN_ROLLER, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          GreenRoller,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.PINK_HOOD, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          PinkHood,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.PINK_ROLLER, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          PinkRoller,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.RED_HOOD, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          RedHood,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));

    cache.set(CacheKey.WHITE_HOOD, await Promise.all(
      Array.from(
        { length: FRAME_COUNT },
        (_, i) => loadImage(
          WhiteHood,
          (i % FRAME_COUNT) * OBSTACLE_WIDTH,
          0,
          OBSTACLE_WIDTH,
          OBSTACLE_HEIGHT,
          {
            resizeQuality: 'pixelated',
            resizeHeight: (canvas.height / 8),
          },
        ),
      ),
    ));
  }

  static getImage(key: CacheKey) {
    return cache.get(key);
  }
}
