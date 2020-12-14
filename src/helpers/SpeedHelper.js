import {
  DELAY_COEFFICIENT,
  SPEED_USE,
  SPEED_MAX,
} from "../constants/animation";

export default class SpeedHelper {
  static speedCalculator(speedParameter, latencies) {
    let speed = 0;
    if (speedParameter && latencies) {
      speed = DELAY_COEFFICIENT * (speedParameter / (latencies * SPEED_USE));
    }
    return speed;
  }

  static speedToPercentage(speed) {
    return SPEED_MAX - speed;
  }
}
