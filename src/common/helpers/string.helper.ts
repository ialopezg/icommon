/**
 * Capitalize first char of a word.
 *
 * If word is capitalized this will be lowercased then the first char will be capitalized.
 *
 * @param text text to be transformed.
 *
 * @returns Text with first char capitalized.
 */
export const capitalizeFirst = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

/**
 * Pads the current string with zeros (multiple times, if needed) until the resulting string reaches
 * the given length. The padding is applied from the start or end of the current string.
 *
 * @param {string|number} value
 * @param {number} targetLength Optional. The length of the resulting string once the current string
 * has been padded. If the value is less than string length, then string is returned as-is.
 * @param {boolean} direction Optional. Padding direction. Accepted values: LEFT | RIGHT.
 *
 * @returns {string} The padded string.
 */
export const zeroise = (
  value: number | string,
  targetLength?: number,
  direction?: 'LEFT' | 'RIGHT',
): string => {
  const s = String(value);
  const length = targetLength || s.length;
  const left = direction === 'LEFT';

  return direction ? s.padStart(length, '0') : s.padEnd(length, '0');
};
