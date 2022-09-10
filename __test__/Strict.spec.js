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

  test('object', () => {
    const obj = { id: 5, name: "JE", age: 27 };
    expect(_.map(obj, v => v)).toEqual([5, 'JE', 27]);
    expect(_.map(obj, _.idtt)).toEqual(_.values(obj));
  })
});

describe('values', () => {
  test('usage', () => { 
    const obj = { id: 5, name: "JE", age: 27 };
    expect(_.values(obj)).toEqual([5, "JE", 27]);
  })
});

describe('keys', () => {
  test('array', () => {
    const array = [3, 2, 1];
    expect(_.keys(array)).toEqual([0, 1, 2]);
  })

  test('object', () => {
    const obj = { id: 5, name: "JE", age: 27 };
    expect(_.keys(obj)).toEqual(['id', 'name', 'age']);
  })
})

describe('each', () => {
  test('console', () => {
    const array = [1, 2, 3];
    _.each(array, console.log)
  })
})