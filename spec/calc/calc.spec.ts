import Calc from '../../src/calc/calc';

describe('Calc', () => {
  describe('plus', () => {
    it('adds a value to the original value', () => {
      const calc = new Calc(1);

      const expected = 3;

      const actual = calc.plus(2);

      expect(expected).toBe(actual);
    });
  });
});
