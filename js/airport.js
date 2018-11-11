export default class Airport {
  constructor() {
    this.planes = []
  }

  arrivals(plane) {
    this.planes.push(plane);
  }

  departures(plane) {
    this.planes = this.planes.filter(pl => pl.id !== plane.id);
  }

  capacity() {
    return this.planes.length;
  }
}