import * as _ from "./Predicates";

export const array = function() { return [] };

export const push_to = function(val, obj) {
  obj.push(val);
  return val;
};

export const noop = function() {};

export const identity = function(v) {
  return v;
};

export const idtt = identity;

export const args0 = identity;

export const args1 = function(a, b) {
  return b;
}

export const keys = function(data) {
  return _.isObject(data) ? Object.keys(data) : [];
};

export const bloop = function(newData, body) {
  return function(data, iteratee) {
    const result = newData(data);
    if (_.isArrayLike(data)) {
      for (let i = 0, len = data.length; i < len; i++) {
        body(iteratee(data[i], i, data), result);
      }
    } else {
      for (let i = 0, _keys = keys(data), len = _keys.length; i < len; i++) {
        body(iteratee(data[_keys[i]], _keys[i], data), result);
      }
    }
    return result;
  }
}

export const map = bloop(array, push_to);

export const values = function(list) {
  return map(list, identity);
};

export const each = bloop(function(v) {
  return v;
}, function() {});