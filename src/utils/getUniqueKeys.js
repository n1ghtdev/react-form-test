export function getUniqueKeys(array, ignore = []) {
  if (Array.isArray(array) && array.length !== 0) {
    return Object.keys(
      array.reduce(function(result, obj) {
        return Object.assign(result, obj);
      }, {}),
    ).filter(el => !ignore.some(e => e === el));
  }
  return [];
}
