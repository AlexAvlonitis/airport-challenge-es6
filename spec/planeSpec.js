import Airport from '../js/airport.js';
import Plane from '../js/plane.js';

describe("Plane", () => {
  let plane;
  let plane2;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    plane2 = new Plane();
    airport = new Airport();

    spyOn(airport, 'arrivals');
    spyOn(airport, 'departures');
  })

  describe('can land to an airport', () => {
    it("calls arrivals on airport", () => {
      plane.land_to(airport)
      expect(airport.arrivals).toHaveBeenCalledWith(plane);
    });
  })

  describe('can take off from an airport', () => {
    it("calls departures on airport", () => {
      plane.take_off(airport)
      expect(airport.departures).toHaveBeenCalledWith(plane);
    });
  })
});


