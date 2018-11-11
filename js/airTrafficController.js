export default class AirTrafficController {
  static land(plane, airport) {
    if (airport.currentWeather() == 'stormy')
      throw "Cannot land, the weather is stormy";

    plane.land_to(airport);
  }

  static takeOff(plane, airport) {
    if (airport.currentWeather() == 'stormy')
      throw "Cannot take off, the weather is stormy";

    plane.take_off(airport);
  }
}