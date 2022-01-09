import Keys from './keys';

const MOVE_UP = 'moveup';
const MOVE_DOWN = 'movedown';
const keyMap = new Map([
  ['KeyW', Keys.UP],
  ['ArrowUp', Keys.UP],

  ['KeyS', Keys.DOWN],
  ['ArrowDown', Keys.DOWN],

  [MOVE_UP, Keys.UP],
  [MOVE_DOWN, Keys.DOWN],
]);

export default class Controller {
  #buttonPressed: Set<Keys | undefined>;

  public get buttonPressed(): Set<Keys | undefined> {
    return this.#buttonPressed;
  }

  constructor(canvas: HTMLCanvasElement, moveUp: HTMLDivElement, moveDown: HTMLDivElement) {
    this.#buttonPressed = new Set();
    moveUp.addEventListener('touchstart', (event) => {
      event.preventDefault();
      if (keyMap.has(MOVE_UP)
        && this.#buttonPressed.size === 0
        && !this.#buttonPressed.has(keyMap.get(MOVE_UP))
      ) {
        this.#buttonPressed.add(keyMap.get(MOVE_UP));
      }
    });
    moveUp.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    moveUp.addEventListener('touchend', (event) => {
      event.preventDefault();
      if (keyMap.has(MOVE_UP)
        && this.#buttonPressed.size === 1
        && this.#buttonPressed.has(keyMap.get(MOVE_UP))
      ) {
        this.#buttonPressed.delete(keyMap.get(MOVE_UP));
      }
    });

    moveDown.addEventListener('touchstart', (event) => {
      event.preventDefault();
      if (keyMap.has(MOVE_DOWN)
        && this.#buttonPressed.size === 0
        && !this.#buttonPressed.has(keyMap.get(MOVE_DOWN))
      ) {
        this.#buttonPressed.add(keyMap.get(MOVE_DOWN));
      }
    });
    moveDown.addEventListener('touchmove', (event) => {
      event.preventDefault();
    });
    moveDown.addEventListener('touchend', (event) => {
      event.preventDefault();
      if (keyMap.has(MOVE_DOWN)
        && this.#buttonPressed.size === 1
        && this.#buttonPressed.has(keyMap.get(MOVE_DOWN))
      ) {
        this.#buttonPressed.delete(keyMap.get(MOVE_DOWN));
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
