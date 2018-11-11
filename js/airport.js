export default class Airport {
  constructor(weather = null) {
    this.planes = []
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

  capacity() {
    return this.planes.length;
  }
}