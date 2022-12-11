import { isUndefined } from './is-undefined.helper';

/**
 * Determines whether the passed value is an undefined or null.
 *
 * @param value The value to be tested for finiteness.
 */
export const isNil = (value: any): boolean => isUndefined(value) || value === null;
