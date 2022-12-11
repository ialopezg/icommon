/**
 * Looks for a key, or dot-notation, value in given target object.
 *
 * @param target Target object
 * @param key Key property name
 *
 * @returns Key property value.
 */
export const getValueFor = (target: any, key: string): any => {
  if (!key.length) {
    return null;
  }

  return key.split('.').reduce((o: any, k: string) => (o || {})[k], target);
};
