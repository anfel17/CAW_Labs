const last = require('./last');

describe('last function tests', () => {
  it('should return the last n elements of an array', () => {
    // Test 1: Return last n elements for a non-empty array and valid n
    const array1 = [1, 2, 3, 4, 5];
    const n1 = 3;
    const result1 = last(array1, n1);
    expect(result1).toEqual([3, 4, 5]);

    // Test 2: Return last n elements for a larger array and valid n
    const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
    const n2 = 4;
    const result2 = last(array2, n2);
    expect(result2).toEqual(['c', 'd', 'e', 'f']); 

    // Test 3: Return an empty array for null or invalid array
    const array3 = null;
    const n3 = 3;
    const result3 = last(array3, n3);
    expect(result3).toEqual([]);

    // Test 4: Return the last element if n is null
    const array4 = ['hello', 'world'];
    const n4 = null;
    const result4 = last(array4, n4);
    expect(result4).toBe('world');

  
  });
});
