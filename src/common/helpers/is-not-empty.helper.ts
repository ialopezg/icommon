import { isEmpty } from './is-empty.helper';

/**
 * Whether given object value is empty.
 *
 * @param value Object to be analyzed.
 *
 * @returns True if value is empty, otherwise false.
 */
export const isNotEmpty = (value: unknown): boolean => !isEmpty(value);
