// file validators/less-than.decorator.ts
import { registerDecorator, ValidationOptions } from 'class-validator';

/**
 * Checks if a value is a number and less than given referenced value.
 *
 * @param {number} threshold Reference value
 * @param {ValidationOptions} validationOptions Validation options
 *
 * @constructor
 */
export function LessThan(
  threshold: number,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'lessThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [threshold],
      options: {
        message: `Value must be less than [${threshold}]`,
        ...validationOptions,
      },
      validator: {
        validate(value: any) {
          return typeof value === 'number' && value < threshold;
        },
      },
    });
  };
}
