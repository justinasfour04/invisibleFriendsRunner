import ConePng from '../static/img/cone.png';
import Spritesheet from '../static/img/spritesheet.png';
import Background from '../static/img/background.png';
import Clouds from '../static/img/clouds.png';
import { loadImage } from './util';
import {
  FRAME_COUNT,
  SPRITE_HEIGHT,
  SPRITE_WIDTH,
  SPRITE_WIDTHS,
} from './constant';

type CacheValue = ImageBitmap | Array<ImageBitmap>;

export enum CacheKey {
  TOP_CONE,
  MIDDLE_CONE,
  BOTTOM_CONE,
  BACKGROUND,
  SPRITES,
  CLOUDS,
}

const cache: Map<CacheKey, CacheValue> = new Map();

export default class ImageCache {
  static async loadAllImages(canvas: HTMLCanvasElement) {
    cache.set(CacheKey.TOP_CONE, await loadImage(
      ConePng,
      0,
      0,
      321,
      400,
      {
        resizeQuality: 'high',
        resizeHeight: (canvas.height / 10),
      },
    ));

    cache.set(CacheKey.MIDDLE_CONE, await loadImage(
      ConePng,
      0,
      0,
      321,
      400,
      {
        resizeQuality: 'high',
        resizeHeight: (canvas.height / 9),
      },
    ));

    cache.set(CacheKey.BOTTOM_CONE, await loadImage(
      ConePng,
      0,
      0,
      321,
      400,
      {
        resizeQuality: 'high',
        resizeHeight: (canvas.height / 8),
      },
    ));

    cache.set(CacheKey.BACKGROUND, await loadImage(
      Background,
      0,
      0,
      2560,
      706,
      {
        resizeQuality: 'high',
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
        resizeQuality: 'high',
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
          SPRITE_WIDTHS[i % FRAME_COUNT],
          SPRITE_HEIGHT,
          {
            resizeQuality: 'high',
            resizeHeight: (canvas.height / 4),
          },
        ),
      ),
    ));
  }

  static getImage(key: CacheKey) {
    return cache.get(key);
  }
}
