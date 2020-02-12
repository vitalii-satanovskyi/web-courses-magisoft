// assert(value) – проверяет что value является true в логическом контексте.
// assert.equal(value1, value2) – проверяет равенство value1 == value2.
// assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
// assert.notEqual, assert.notStrictEqual – проверки, обратные двум предыдущим.
// assert.isTrue(value) – проверяет, что value === true
// assert.isFalse(value) – проверяет, что value === false
// ...
// https://www.chaijs.com/api/assert/


// блок тестов возведения числа к степени
// describe("pow", function() {

// тест для проверки правильности работы функции возведения в степень 3 числа 2 
//   it("При возведении числа 2 в степень 3 функцией pow ожидается 6", function() {
//     assert.equal(pow(2, 3), 6);
//   });

//   it("При возведении числа 3 в степень 4 функцией pow ожидается 81", function() {
//     assert.equal(pow(3, 4), 81);
//   });

// });

//-----------------------------------

// describe("pow", () => {

//   const makeTest = (x, p) => {
//     const expected = x ** p;
//     it(`При возведении ${x} в степень ${p} результат: ${expected}`, function() {
//       assert.equal(pow(x, p), expected);
//     });
//   };

// for (let p = 1; p <= 5; p++) {
//   for (let x = 1; x <= 5; x++) {
//     makeTest(x, p);
//   }
// }

// });

//----------------------------------------

// describe("", () => {
//   describe("", () => {
//   });
// });

//--------------------------------------

describe('Провірка правильності роботи калькулятора', function() {
  it("plus(1, 2) == 3", function() {
    assert.equal(plus(1, 2), 3);
  });

  it("minus(3, 2) == 1", function() {
    assert.equal(minus(3, 2), 1);
  });

  it("divide(4, 2) == 2", function() {
    assert.equal(divide(4, 2), 2);
  });

  it("multiply(2, 2) == 4", function() {
    assert.equal(multiply(2, 2), 4);
  });

  it("При підрахунку прикладу '1 + 2' використовуючи асінхронну функцію calc очікується '3' (with async/wait)", async function() {
    const resAnswer = await calc(1, 'plus', 2)
    assert.equal(resAnswer, 3);
  });

  it("При підрахунку прикладу '1 + 2' використовуючи асінхронну функцію calc очікується '3' (with done)", function(done) {
    calc(1, 'plus', 2)
      .then(value => {
        assert.equal(value, 3);
      })
      .then(() => done(), done);
  });
});