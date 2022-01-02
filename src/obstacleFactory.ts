import Cone from './cone';
import { LanePositionsTypes } from './constant';
import Obstacle from './obstacle';

const OBSTACLE_SPACING = 270;

export default class ObstacleFactory {
  private queues: Map<LanePositionsTypes, Array<Obstacle>>;

  constructor(private ctx: CanvasRenderingContext2D | null, private lanePositions: number[]) {
    this.queues = new Map([
      [LanePositionsTypes.TOP, []],
      [LanePositionsTypes.MIDDLE, []],
      [LanePositionsTypes.BOTTOM, []],
    ]);
  }

  reset() {
    this.queues.set(LanePositionsTypes.TOP, []);
    this.queues.set(LanePositionsTypes.MIDDLE, []);
    this.queues.set(LanePositionsTypes.BOTTOM, []);
  }

  create(lane: LanePositionsTypes, acceleration: number) {
    if (this.ctx !== null) {
      if (this.queues.get(lane) !== undefined) {
        const cone = new Cone(this.ctx, lane, this.lanePositions[lane], acceleration);
        const queue = this.queues.get(lane) as Obstacle[];

        const allObstacles = [...this.queues.values()].flat();
        const maxX = Math.max(...allObstacles.map((o) => o.x));
        if (cone.x - maxX >= OBSTACLE_SPACING) {
          queue.push(cone);
        }
      }
    }
  }

  draw(lane: LanePositionsTypes) {
    this.queues.get(lane)?.forEach((obstacle) => {
      obstacle.draw();
    });
  }

  update(secondsPassed: number = 1) {
    [...this.queues.values()].flat().forEach((obstacle) => {
      obstacle.update(secondsPassed);
    });
  }

  getClosestObstacle(): Obstacle | undefined {
    const closestObstacles = [...this.queues.values()].map((o) => o[0]).filter(Boolean);
    let closestObstacle: Obstacle | undefined;
    let minX = Number.MAX_SAFE_INTEGER;
    if (closestObstacles.length) {
      for (const obstacle of closestObstacles) {
        if (obstacle.x < minX) {
          minX = obstacle.x;
          closestObstacle = obstacle;
        }
      }
    }
    return closestObstacle;
  }

  deleteOldestObstacles() {
    [...this.queues.values()].flat().forEach((obstacle) => {
      if (obstacle.x < -obstacle.w) {
        this.queues.get(obstacle.lane)?.shift();
      }
    });
  }
}
