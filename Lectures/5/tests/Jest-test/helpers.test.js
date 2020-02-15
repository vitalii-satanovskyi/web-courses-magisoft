const helpers = require('./helpers');
// import helpers from './helpers';

// methods - https://jestjs.io/docs/en/expect#methods

describe('Helpers', () => {
  describe('Calc', () => {
    test('plus(1, 2) == 3', () => {
      expect(helpers.plus(1, 2)).toEqual(3);
    });

    test('minus(3, 2) == 1', () => {
      expect(helpers.minus(3, 2)).toEqual(1);
    });

    test('divide(4, 2) == 2', () => {
      expect(helpers.divide(4, 2)).toEqual(2);
    });

    test('multiply(2, 2) == 4', () => {
      expect(helpers.multiply(2, 2)).toEqual(4);
    });

    test("При підрахунку прикладу '1 + 2' використовуючи асінхронну функцію calc очікується '3' (with async/wait)", async () => {
      const resAnswer = await helpers.calc(1, 'plus', 2);
      expect(resAnswer).toEqual(3);
    });

    test("При підрахунку прикладу '1 + 2' використовуючи асінхронну функцію calc очікується '3' (with done)", done => {
      helpers.calc(1, 'plus', 2)
        .then(value => {
          expect(value).toEqual(3);
        })
        .then(() => done(), done);
    });
  });

  describe('Other', () => {
    test('При виклику функції makeRandomId має бути строка з довжиною 8 символів', () => {
      expect(typeof helpers.makeRandomId()).toBe('string')
      expect(helpers.makeRandomId()).toHaveLength(8)
    });
  });
});
