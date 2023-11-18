const chunk = require('./chunk');

describe('chunk function tests', () => {
  it('should split an array into chunks of specified size', () => {
    // Test 1: Split array into chunks of size 2
    const array1 = [1, 2, 3, 4, 5];
    const size1 = 2;
    const result1 = chunk(array1, size1);
    expect(result1).toEqual([[1, 2], [3, 4], [5]]);

    // Test 2: Split array into chunks of size 3
    const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
    const size2 = 3;
    const result2 = chunk(array2, size2);
    expect(result2).toEqual([['a', 'b', 'c'], ['d', 'e', 'f']]); 

    // Test 3: Split an empty array
    const array3 = [];
    const size3 = 2;
    const result3 = chunk(array3, size3);
    expect(result3).toEqual([]); 
    // Test 4: Split array with size greater than array length
    const array4 = [10, 20, 30];
    const size4 = 5;
    const result4 = chunk(array4, size4);
    expect(result4).toEqual([[10, 20, 30]]);

  });
});
