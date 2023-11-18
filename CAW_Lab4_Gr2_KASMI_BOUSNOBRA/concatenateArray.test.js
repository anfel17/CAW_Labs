const concatenateArray = require('./concatenateArray');

describe('concatenateArray function tests', () => {
  it('should concatenate array elements using toString()', () => {
    const testArray = ['Red', 'Green', 'White', 'Black'];
    const concatenated = concatenateArray(testArray);
    const result = concatenated.toString();
    expect(result).toBe('Red,Green,White,Black');
  });

  it('should concatenate array elements using join() without a separator', () => {
    const testArray = ['Red', 'Green', 'White', 'Black'];
    const concatenated = concatenateArray(testArray);
    const result = concatenated.join();
    expect(result).toBe('Red,Green,White,Black');
  });

  it('should concatenate array elements using join() with an empty separator', () => {
    const testArray = ['Red', 'Green', 'White', 'Black'];
    const concatenated = concatenateArray(testArray);
    const result = concatenated.join('');
    expect(result).toBe('RedGreenWhiteBlack');
  });
});
