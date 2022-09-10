import * as _ from "../src/Strict";

describe('map', () => {
  test('array', () => {
    const array = [1, 2, 3];
    const result = _.map(array, v => v * 5);
    expect(result).toEqual([5, 10, 15]);
  });

  test('array this', () => {
    const array = [1, 2, 3];
    const result = _.map(array, function(v) {
      return v * this;
    }.bind(5));
    expect(result).toEqual([5, 10, 15]);
  });
});

describe('values', () => {
  test('usage', () => { 
    const obj = { id: 5, name: "JE", age: 27 };
    console.log(_.values(obj))
    expect(_.values(obj)).toEqual([5, "JE", 27]);
  })
});