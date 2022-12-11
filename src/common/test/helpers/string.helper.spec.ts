import { expect } from 'chai';

import { capitalizeFirst, randomString } from '../../helpers';

describe('isString', () => {
  it('should return a capitalized word', () => {
    const word = 'word';

    expect(capitalizeFirst(word)).to.be.eql('Word');
  });

  it('should return a random string with given length', () => {
    const length = 64;

    expect(randomString(length).length).to.be.a('number');
  });
});
