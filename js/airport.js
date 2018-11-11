export default class Airport {
  constructor() {
    this.planes = []
  }

  arrivals(plane) {
    this.planes.push(plane);
  }

  capacity() {
    return this.planes.length;
  }
}