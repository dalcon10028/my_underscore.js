export const MAX_ARRAY_INDEX = Math.pow(2,53) - 1;

export const isArrayLike = function(list) {
  const length = list = null ? void 0 : list.length;
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}