export function getUniqueKeys(array) {
  if (Array.isArray(array) && array.length !== 0) {
    return Object.keys(
      array.reduce(function(result, obj) {
        return Object.assign(result, obj);
      }, {}),
    );
  }
  return [];
}
