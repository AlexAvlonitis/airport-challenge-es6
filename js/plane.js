export default class Plane {
  constructor() {
  }

  land_to(airport){
    airport.arrivals(this.self);
  }
}