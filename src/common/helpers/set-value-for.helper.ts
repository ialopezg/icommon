/**
 * Convert a string dot-notation into an object.
 *
 * @param target target object.
 * @param key Dot-notation text.
 * @param value Default value for object property.
 *
 * @returns An object containing all properties given in dot-notation string.
 */
export const setValueFor = (target: any, key: string, value: any = '') => {
  // Split path into component parts
  const path = key.split('.');

  if (path.length === 0 || (path.length === 1 && path[0].length === 0)) {
    throw new Error('key cannot be empty!');
  } else if (path.length === 1) {
    target[path[0]] = value;

    return target;
  }

  return setValueFor(target[path[0]], path.slice(1).join('.'), value);
};
