/**
 * @jest-environment jsdom
 */

//  do przeprowadzenia testów zakomentuj w pliku './calculate.js' linie kodu numer 47 i 83 oraz w linii 88 odkomentuj linię ('module.exports = CalculateByContext;')
const CalculateByContext = require('./calculate.js');

test('dodaje do siebie wszystkie liczby z podanej tablicy [0,9,18,90]  ', () => {
  expect(CalculateByContext('sum', [0,9,18,90])).toBe(117);
});
test('odejmuję od siebie wszystkie liczby z podanej tablicy [600,0,9,18,90]  ', () => {
    expect(CalculateByContext('substract', [600,0,9,18,90])).toBe(483);
  });
test('dodaje do siebie wszystkie liczby z podanej tablicy [0,9,18,90]  ', () => {
expect(CalculateByContext('multiply', [9,18,90])).toBe(14580);
});
test('sprawdzam zabezpieczenie przed tablicą bez liczb [0,9,słowo,90]  ', () => {
    expect(CalculateByContext('sum', [0,9,'słowo',90])).toEqual("Wrong input data");
  });
test('sprawdzam zabezpieczenie przed wywołaniem z niezdefiniowanym kontekstem  ', () => {
expect(CalculateByContext('nieznany', [0,9,18,90])).toEqual("Wrong input data");
});
test('sprawdzam zabezpieczenie przed wywołaniem z jedną liczbą ', () => {
    expect(CalculateByContext('sum', [3])).toEqual("Wrong input data");
    });
test('sprawdzam zabezpieczenie przed wywołaniem z bez liczb ', () => {
        expect(CalculateByContext('sum', )).toEqual("Wrong input data");
    });
test('sprawdzam zabezpieczenie przed wywołaniem z liczbą w context ', () => {
          expect(CalculateByContext(8, )).toEqual("Wrong input data");
    });