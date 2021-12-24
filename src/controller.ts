import Keys from './keys';

const keyMap = new Map([
  ['KeyW', Keys.UP],
  ['ArrowUp', Keys.UP],

  ['KeyS', Keys.DOWN],
  ['ArrowDown', Keys.DOWN],

  ['Space', Keys.SPACE],
]);

export default class Controller {
  #buttonPressed: Set<Keys | undefined>;

  public get buttonPressed(): Set<Keys | undefined> {
    return this.#buttonPressed;
  }

  constructor() {
    this.#buttonPressed = new Set();
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
