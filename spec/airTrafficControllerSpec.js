import Airport from '../js/airport.js';
import Plane from '../js/plane.js';
import Weather from '../js/weather';
import AirTrafficController from '../js/airTrafficController';

describe("Air Traffic Controller", () => {
  let plane;
  let plane2;
  let airport;
  let weather;

  beforeEach(() => {
    plane = new Plane();
    plane2 = new Plane();
    weather = new Weather();
    airport = new Airport(weather);

    spyOn(plane, 'land_to');
    spyOn(plane, 'take_off');
  })

  describe('Instruct a plane to land to an airport', () => {
    it("lands to given airport", () => {
      spyOn(airport, 'currentWeather').and.returnValue('sunny');

      AirTrafficController.land(plane, airport);
      expect(plane.land_to).toHaveBeenCalledWith(airport);
    });
  })

  describe('can take off from an airport', () => {
    it("takes off from given airport", () => {
      spyOn(airport, 'currentWeather').and.returnValue('sunny');

      AirTrafficController.takeOff(plane, airport);
      expect(plane.take_off).toHaveBeenCalledWith(airport);
    });
  })

  describe('When the weather is stormy', () => {
    it("doen't take off from given airport", () => {
      spyOn(airport, 'currentWeather').and.returnValue('stormy');

      expect(() => { AirTrafficController.takeOff(plane, airport) })
        .toThrow("Cannot take off, the weather is stormy");
    });

    it("can't land on given airport", () => {
      spyOn(airport, 'currentWeather').and.returnValue('stormy');

      expect(() => { AirTrafficController.land(plane, airport) })
        .toThrow("Cannot land, the weather is stormy");
    });
  })
});


