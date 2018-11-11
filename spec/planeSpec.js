import Airport from '../js/airport.js';
import Plane from '../js/plane.js';

describe("Plane", () => {
  let plane = new Plane();
  let airport = new Airport();

  describe('Instruct a plane to land to an airport', () => {
    it("lands to instructed airport", () => {
      plane.land_to(airport)
      expect(airport.capacity()).toEqual(1);
    });
  })
});


