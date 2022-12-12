import { expect } from 'chai';

import { capitalizeFirst } from '../../helpers';

describe('isString', () => {
  it('should return a capitalized word', () => {
    const word = 'word';

    expect(capitalizeFirst(word)).to.be.eql('Word');
  });
});
