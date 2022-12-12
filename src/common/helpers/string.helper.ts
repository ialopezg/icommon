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
