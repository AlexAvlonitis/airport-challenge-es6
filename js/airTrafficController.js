export default class AirTrafficController {
  static land(plane, airport) {
    if (airport.currentWeather() == 'stormy')
      throw "Cannot land, the weather is stormy";

    if (airport.planes.length === airport.capacity)
      throw "Cannot land, the airport is over capacity";

    plane.land_to(airport);
  }

  static takeOff(plane, airport) {
    if (airport.currentWeather() == 'stormy')
      throw "Cannot take off, the weather is stormy";

    plane.take_off(airport);
  }
}