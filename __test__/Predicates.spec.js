import { isArrayLike } from "../src/Predicates";

describe('isArrayLike', () => {
  test('array', () => {
    const array = [1, 2, 3];
    expect(isArrayLike(array)).toBe(true);
  });
})
