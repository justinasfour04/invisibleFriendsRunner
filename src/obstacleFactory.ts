import Cone from './cone';
import { ZERO_X_POS } from './constant';
import Obstacle from './obstacle';

const OBSTACLE_CYCLE = 400;

export default class ObstacleFactory {
  private obstacleCycleCount: number;

  private topFloorObstacleQueue: Array<Obstacle>;

  private bottomFloorObstacleQueue: Array<Obstacle>;

  constructor(private ctx: CanvasRenderingContext2D | null) {
    this.topFloorObstacleQueue = [];
    this.bottomFloorObstacleQueue = [];
    this.obstacleCycleCount = 0;
  }

  create(isTopFloor: boolean) {
    if (this.ctx !== null) {
      if (this.obstacleCycleCount >= OBSTACLE_CYCLE) {
        this.obstacleCycleCount = 0;
        const cone = new Cone(this.ctx, isTopFloor);
        if (isTopFloor) {
          this.topFloorObstacleQueue.push(cone);
        } else {
          this.bottomFloorObstacleQueue.push(cone);
        }
      }
    }
    this.obstacleCycleCount += 1;
  }

  drawTop() {
    this.topFloorObstacleQueue.forEach((obstacle) => {
      obstacle.draw();
    });
  }

  drawBottom() {
    this.bottomFloorObstacleQueue.forEach((obstacle) => {
      obstacle.draw();
    });
  }

  update(secondsPassed: number = 1) {
    this.topFloorObstacleQueue.forEach((obstacle) => {
      obstacle.update(secondsPassed);
    });

    this.bottomFloorObstacleQueue.forEach((obstacle) => {
      obstacle.update(secondsPassed);
    });
  }

  getClosestObstacle(isTopFloor: boolean) {
    return isTopFloor ? this.topFloorObstacleQueue[0] : this.bottomFloorObstacleQueue[0];
  }

  deleteOldestObstacle(isTopFloor: boolean) {
    if (isTopFloor) {
      this.topFloorObstacleQueue.shift();
    } else {
      this.bottomFloorObstacleQueue.shift();
    }
  }
}
