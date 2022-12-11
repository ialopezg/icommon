import { isArray } from './is-array.helper';
import { isFunction } from './is-function.helper';

/**
 * Determines whether the passed value is an object. If  needed, the parameter is first converted to an object.
 *
 * @param value The value to be tested for finiteness.
 */
export const isObject = function (value: any) {
  return Object.prototype.toString.call(value) === '[object Object]' && !isArray(value) && !isFunction(value);
};
