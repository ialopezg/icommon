import { expect } from 'chai';
import { encodeString, generateHash, validateHash } from '../../helpers';

describe('hash', () => {
  describe('generateHash', () => {
    it('should generate a hash with default salt steps', async () => {
      const password = await generateHash('password');

      expect(password).to.be.a('string');
    });

    it('should generate a hash with custom salt steps', async () => {
      const password = await generateHash('password', 10);

      expect(password).to.be.a('string');
    });
  });

  describe('validateHash', () => {
    it('should return false when validate a hashed string with null password and hashed values', async () => {
      const password = await generateHash('password');

      expect(await validateHash(null, null)).to.be.false;
    });

    it('should return false when validate a hashed string and hash value is undefined or null', async () => {
      const password = await generateHash('password');

      expect(await validateHash('password', null)).to.be.false;
    });

    it('should validate a hashed string', async () => {
      const password = await generateHash('password');

      expect(await validateHash('password', password)).to.be.true;
    });
  });

  describe('encodeString', () => {
    it('should encode a string value', function () {
      expect(encodeString('admin').length).to.be.a('number');
    });
  });
});
