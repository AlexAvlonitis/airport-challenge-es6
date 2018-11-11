const CAPACITY = 20;

export default class Airport {
  constructor(weather = null, capacity = null) {
    this.planes = []
    this.capacity = capacity || CAPACITY
    this.weather = weather
  }

  arrivals(plane) {
    this.planes.push(plane);
  }

  departures(plane) {
    this.planes = this.planes.filter(pl => pl.id !== plane.id);
  }

  currentWeather() {
    return this.weather && this.weather.current();
  }
}