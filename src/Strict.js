import { isArrayLike } from "./Predicates";

export const map = function(data, iteratee) {
  const newList = [];
  if (isArrayLike(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      newList.push(iteratee(data[i], i, data));
    }
  } else {
    for (const key in data) {
      if (data.hasOwnProperty(key))
        newList.push(data[key], key, data);
    }
  }
  return newList;
}