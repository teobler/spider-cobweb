import combineClass from '../combineClass';

describe('combineClass', () => {
  it('should return prefixed string given only string', () => {
    const result = combineClass('class-one');
    expect(result).toEqual('spider-class-one');
  });

  it('should return prefixed string given string and space', () => {
    const result = combineClass('class-one ');
    expect(result).toEqual('spider-class-one');
  });

  it('should return combined string given two strings', () => {
    const result = combineClass('class-one', 'class-two');
    expect(result).toEqual('spider-class-one class-two');
  });

  it('should return combined string given a string and another combined string', () => {
    const result = combineClass('class-one', 'class-two class-three');
    expect(result).toEqual('spider-class-one class-two class-three');
  });

  it('should return prefixed string given a string and undefined', () => {
    const result = combineClass('class-one');
    expect(result).toEqual('spider-class-one');
  });
});
