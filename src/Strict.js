import { isArrayLike } from "./Predicates";

export const map = bloop(function() {
  return [];
}, function(val, obj) {
  return obj.push(val);
});

export const identity = function(v) {
  return v;
};

export const idtt = identity;

export const values = function(list) {
  return map(list, identity);
};

export const args0 = identity;

export const args1 = function(a, b) {
  return b;
}

export const keys = function(list) {
  return map(list, args1);
}

export const each = bloop(function(v) {
  return v;
}, function() {});

function bloop(newData, body) {
  return function(data, iteratee) {
    const result = newData(data);
    if (isArrayLike(data)) {
      for (let i = 0, len = data.length; i < len; i++) {
        body(iteratee(data[i], i, data), result);
      }
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key))
          body(iteratee(data[key], key, data), result);
      }
    }
    return result;
  }
}