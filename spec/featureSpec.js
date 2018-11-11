import Airport from '../js/airport.js';
import Plane from '../js/plane.js';
import Weather from '../js/weather';
import AirTrafficController from '../js/airTrafficController';

describe("feature - Air Traffic Controller", () => {
  let plane;
  let plane2;
  let airport;
  let weather;

  beforeEach(() => {
    plane = new Plane();
    plane2 = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  })

  describe('Instruct a plane to land to an airport', () => {
    it("lands to given airport", () => {
      spyOn(airport, 'currentWeather').and.returnValue('sunny');

      AirTrafficController.land(plane, airport);
      expect(airport.planes[0]).toEqual(plane);
    });
  })

  describe('can take off from an airport', () => {
    it("takes off from given airport", () => {
      spyOn(airport, 'currentWeather').and.returnValue('sunny');

      AirTrafficController.land(plane, airport);
      AirTrafficController.land(plane2, airport);
      AirTrafficController.takeOff(plane, airport);
      expect(airport.planes[0]).toEqual(plane2);
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


