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
  })

  describe('Instruct a plane to land to an airport', () => {
    it("lands to given airport", () => {
      plane.land_to(airport)
      expect(airport.capacity()).toEqual(1);
    });
  })

  describe('Instruct a plane to take off from an airport', () => {
    it("takes off from given airport", () => {
      plane2.land_to(airport)
      plane.take_off(airport)
      expect(airport.capacity()).toEqual(1);
    });
  })
});


