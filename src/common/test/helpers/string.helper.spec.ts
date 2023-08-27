import { expect } from 'chai';

import { camelize, capitalize, padLeft, padRight, zeroise } from '../../helpers';

describe('string', () => {
  it('should camelize a string value', () => {
    expect(camelize('EquipmentClass name')).to.be.equal('equipmentClassName');
    expect(camelize('Equipment className')).to.be.equal('equipmentClassName');
    expect(camelize('equipment class name')).to.be.equal('equipmentClassName');
    expect(camelize('Equipment Class Name')).to.be.equal('equipmentClassName');
    expect(camelize('equipment_class_name')).to.be.equal('equipmentClassName');
    expect(camelize('Equipment-Class-Name')).to.be.equal('equipmentClassName');
  });

  it('should return a capitalized word', () => {
    const word = 'word';

    expect(capitalize(word)).to.be.eql('Word');
  });

  it('should return a zeroized value', () => {
    const number = 17;

    expect(zeroise(number, 4)).to.be.eql('0017');
    expect(zeroise(number, 4, 'RIGHT')).to.be.eql('1700');
  });

  it('should return a pad left value', () => {
    const number = 17;

    expect(padLeft(number, 4)).to.be.eql('0017');
  });

  it('should return a pad right value', () => {
    const number = 17;

    expect(padRight(number, 4)).to.be.eql('1700');
  });
});
