import Airport from '../js/airport.js';
import Plane from '../js/plane.js';
import Weather from '../js/weather.js';

describe("Airport", () => {
  let plane;
  let weather;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });


  describe('Accepts plane arrivals', () => {
    it("allows a plane to land", () => {
      airport.arrivals(plane)
      expect(airport.planes).toEqual([plane]);
    });
  })

  describe("Knows what's the weather like", () => {
    it("return 'stormy' if it's stormy", () => {
      spyOn(weather, 'current').and.returnValue('stormy');

      expect(airport.currentWeather()).toEqual('stormy')
    });
  })
});


