export const camelize = (value: string) => {
  return value.replace(/^([A-Z])|[\s-_](\w)/g, (_, p, p2, __) => {
    if (p2) {
      return p2.toUpperCase();
    }

    return p.toLowerCase();
  });
};

/**
 * Capitalize first char of a word.
 *
 * If word is capitalized this will be lowercased then the first char will be capitalized.
 *
 * @param text text to be transformed.
 *
 * @returns Text with first char capitalized.
 */
export const capitalize = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

/**
 * Pads the current string with zeros (multiple times, if needed) until the resulting string reaches
 * the given length. The padding is applied from the start or end of the current string.
 *
 * @param {string|number} value
 * @param {number} threshold Optional. The length of the resulting string once the current string
 * has been padded. If the value is less than string length, then string is returned as-is.
 * @param {string} direction Optional. Padding direction. Accepted values: LEFT | RIGHT.
 * @param {string} pad Optional.
 *
 * @returns {string} The padded string.
 */
export const pad = (
  value: unknown,
  threshold?: number,
  direction?: 'LEFT' | 'RIGHT',
  pad?: string,
): string => {
  pad = pad ? pad : '0';
  const str = String(value);
  const length = str.length;

  if (length >= threshold) {
    return str;
  }

  direction = direction ? direction : 'LEFT';
  if (direction === 'LEFT') {
    return Array(threshold - length + 1).join(pad) + str;
  }

  return str + Array(threshold - length + 1).join(pad);
};

export const zeroise = (value: unknown, threshold: number, direction?: 'LEFT' | 'RIGHT') => pad(value, threshold, direction);

export const padLeft = (value: unknown, threshold: number) => pad(value, threshold, 'LEFT');

export const padRight = (value: unknown, threshold: number) => pad(value, threshold, 'RIGHT');
