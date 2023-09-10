import { GreaterThan } from '../../../decorators';
import { validate } from 'class-validator';
import { expect } from 'chai';

describe('GreaterThan', () => {
  describe('positive tests', () => {
    it('should return no ValidationErrors when greater or equal than 1', async () => {
      class Test {
        @GreaterThan(1)
        max: number;
      }

      const test = new Test();
      test.max = 10; // Max is bigger than min => All good!

      const validationErrorsArray = await validate(test);
      expect(test.max).greaterThanOrEqual(1); // Sanity check
      expect(validationErrorsArray).to.eql([]);
      expect(validationErrorsArray).length(0);
    });

    it('should contain error message when value is less than threshold', async () => {
      const errorMessage = 'Value should be bigger than 0';

      class Test {
        @GreaterThan(1, {
          message: errorMessage,
        })
        value: number;
      }

      const test = new Test();
      test.value = 0;

      const validationErrorsArray = await validate(test);
      const validationError = validationErrorsArray[0];

      expect(test.value).lessThanOrEqual(1); // Sanity check
      expect(validationErrorsArray).length(1);
      expect(validationError.constraints).haveOwnProperty(
        'greaterThan',
        errorMessage,
      );
    });
  });

  describe('negative tests', () => {
    it('should return no ValidationErrors when greater or equal than -1', async () => {
      class Test {
        @GreaterThan(-1)
        value: number;
      }

      const test = new Test();
      test.value = 10; // Max is bigger than min => All good!

      const validationErrorsArray = await validate(test);
      expect(test.value).greaterThanOrEqual(-1); // Sanity check
      expect(validationErrorsArray).to.eql([]);
      expect(validationErrorsArray).length(0);
    });

    it('should contain error message when value is less than threshold', async () => {
      const errorMessage = 'Value should be bigger than -1';

      class Test {
        @GreaterThan(-1, {
          message: errorMessage,
        })
        value: number;
      }

      const test = new Test();
      test.value = -2;

      const validationErrorsArray = await validate(test);
      const validationError = validationErrorsArray[0];

      expect(test.value).lessThanOrEqual(-2); // Sanity check
      expect(validationErrorsArray).length(1);
      expect(validationError.constraints).haveOwnProperty(
        'greaterThan',
        errorMessage,
      );
    });
  });
});
