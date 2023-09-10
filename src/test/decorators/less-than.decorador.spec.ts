import { validate } from 'class-validator';
import { expect } from 'chai';

import { LessThan } from '../../decorators';

describe('LessThan', () => {
  describe('positive tests', () => {
    it('should return no ValidationErrors when less or equal than 1', async () => {
      class Test {
        @LessThan(1)
        value: number;
      }

      const test = new Test();
      test.value = 0; // Max is bigger than min => All good!

      const validationErrorsArray = await validate(test);
      expect(test.value).greaterThanOrEqual(0); // Sanity check
      expect(validationErrorsArray).to.eql([]);
      expect(validationErrorsArray).length(0);
    });

    it('should contain error message when value is greater than threshold', async () => {
      const errorMessage = 'Value should be bigger than 0';

      class Test {
        @LessThan(1, {
          message: errorMessage,
        })
        value: number;
      }

      const test = new Test();
      test.value = 2;

      const validationErrorsArray = await validate(test);
      const validationError = validationErrorsArray[0];

      expect(test.value).lessThanOrEqual(2); // Sanity check
      expect(validationErrorsArray).length(1);
      expect(validationError.constraints).haveOwnProperty(
        'lessThan',
        errorMessage,
      );
    });
  });

  describe('negative tests', () => {
    it('should return no ValidationErrors when less or equal than -1', async () => {
      class Test {
        @LessThan(-1)
        value: number;
      }

      const test = new Test();
      test.value = -2; // Max is bigger than min => All good!

      const validationErrorsArray = await validate(test);
      expect(test.value).greaterThanOrEqual(-2); // Sanity check
      expect(validationErrorsArray).to.eql([]);
      expect(validationErrorsArray).length(0);
    });

    it('should contain error message when value is greater than threshold', async () => {
      const errorMessage = 'Value should be bigger than -1';

      class Test {
        @LessThan(-1, {
          message: errorMessage,
        })
        value: number;
      }

      const test = new Test();
      test.value = 0;

      const validationErrorsArray = await validate(test);
      const validationError = validationErrorsArray[0];

      expect(test.value).lessThanOrEqual(0); // Sanity check
      expect(validationErrorsArray).length(1);
      expect(validationError.constraints).haveOwnProperty(
        'lessThan',
        errorMessage,
      );
    });
  });
});
