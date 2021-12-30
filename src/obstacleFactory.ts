import Cone from './cone';
import { LanePositionsTypes } from './constant';
import Obstacle from './obstacle';

const OBSTACLE_CYCLE = 200;

export default class ObstacleFactory {
  private obstacleCycleCount: number;

  private queues: Map<LanePositionsTypes, Array<Obstacle>>;

  constructor(private ctx: CanvasRenderingContext2D | null, private lanePositions: number[]) {
    this.queues = new Map([
      [LanePositionsTypes.TOP, []],
      [LanePositionsTypes.MIDDLE, []],
      [LanePositionsTypes.BOTTOM, []],
    ]);
    this.obstacleCycleCount = 0;
  }

  reset() {
    this.queues.set(LanePositionsTypes.TOP, []);
    this.queues.set(LanePositionsTypes.MIDDLE, []);
    this.queues.set(LanePositionsTypes.BOTTOM, []);
    this.obstacleCycleCount = 0;
  }

  create(lane: LanePositionsTypes) {
    if (this.ctx !== null) {
      if (this.obstacleCycleCount >= OBSTACLE_CYCLE) {
        this.obstacleCycleCount = 0;
        const cone = new Cone(this.ctx, lane, this.lanePositions[lane]);
        if (this.queues.has(lane)) {
          this.queues.get(lane)?.push(cone);
        }
      }
    }
    this.obstacleCycleCount += 1;
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

  getClosestObstacle() {
    const closestObstacles = [...this.queues.values()].map((obstacles) => obstacles[0]);
    if (closestObstacles.length) {
      return closestObstacles.reduce((closest: Obstacle | undefined, current) => {
        if (closest && closest.x < current.x) {
          return current;
        }

        return closest;
      }, undefined);
    }

    return undefined;
  }

  deleteOldestObstacle() {
    const closest = this.getClosestObstacle();
    if (closest) {
      const { lane } = closest;
      this.queues.get(lane)?.shift();
    }
  }
}
