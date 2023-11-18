const first = require('./first'); 

describe('first function tests', () => {
  it('should return the first n elements of an array', () => {
    // Test 1: Return first n elements for a non-empty array and valid n
    const array1 = [1, 2, 3, 4, 5];
    const n1 = 3;
    const result1 = first(array1, n1);
    expect(result1).toEqual([1, 2, 3]); // Expect the first 3 elements of the array

    // Test 2: Return first n elements for a larger array and valid n
    const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
    const n2 = 4;
    const result2 = first(array2, n2);
    expect(result2).toEqual(['a', 'b', 'c', 'd']); 

    // Test 3: Return an empty array for invalid or null n
    const array3 = [10, 20, 30];
    const n3 = 0;
    const result3 = first(array3, n3);
    expect(result3).toEqual([]); 

    // Test 4: Return an empty array for null or invalid array
    const array4 = null;
    const n4 = 3;
    const result4 = first(array4, n4);
    expect(result4).toEqual([]); 

  });
});
