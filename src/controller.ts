import Keys from './keys';

const TOUCH = 'Touch';
const keyMap = new Map([
  ['KeyW', Keys.UP],
  ['ArrowUp', Keys.UP],

  ['KeyS', Keys.DOWN],
  ['ArrowDown', Keys.DOWN],

  ['Space', Keys.SPACE],
  [TOUCH, Keys.SPACE],
]);

export default class Controller {
  #buttonPressed: Set<Keys | undefined>;

  public get buttonPressed(): Set<Keys | undefined> {
    return this.#buttonPressed;
  }

  constructor(canvas: HTMLCanvasElement) {
    this.#buttonPressed = new Set();
    canvas.addEventListener('touchstart', (event) => {
      event.preventDefault();
      if (keyMap.has(TOUCH)
        && this.#buttonPressed.size === 0
        && !this.#buttonPressed.has(keyMap.get(TOUCH))
      ) {
        this.#buttonPressed.add(keyMap.get(TOUCH));
      }
    });
    canvas.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    canvas.addEventListener('touchend', (event) => {
      event.preventDefault();
      if (keyMap.has(TOUCH)
        && this.#buttonPressed.size === 1
        && this.#buttonPressed.has(keyMap.get(TOUCH))
      ) {
        this.#buttonPressed.delete(keyMap.get(TOUCH));
      }
    });

    window.addEventListener('keydown', (event) => {
      const { code } = event;
      if (keyMap.has(code)
        && this.#buttonPressed.size === 0
        && !this.#buttonPressed.has(keyMap.get(code))
      ) {
        this.#buttonPressed.add(keyMap.get(code));
      }
    });

    window.addEventListener('keyup', (event) => {
      const { code } = event;
      if (keyMap.has(code)
        && this.#buttonPressed.size === 1
        && this.#buttonPressed.has(keyMap.get(code))
      ) {
        this.#buttonPressed.delete(keyMap.get(code));
      }
    });
  }
}
