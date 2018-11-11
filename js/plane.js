export default class Plane {
  constructor() {
    this.id = this._randomId();
  }

  land_to(airport) {
    airport.arrivals(this);
  }

  take_off(airport) {
    airport.departures(this);
  }

  _randomId() {
    return Math.floor(Math.random() * 20000);
  }
}