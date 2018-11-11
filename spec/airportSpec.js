import Airport from '../js/airport.js';
import Plane from '../js/plane.js';

describe("Airport", () => {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  })

  describe('Accepts plane arrivals', () => {
    it("allows a plane to land", () => {
      airport.arrivals(plane)
      expect(airport.capacity()).toEqual(1);
    });
  })
});


