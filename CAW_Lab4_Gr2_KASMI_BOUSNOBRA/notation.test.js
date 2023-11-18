const mean = require('./notation'); 

describe('mean function tests', () => {
  it('should calculate the correct mean', () => {
    // Test 1: Ensure the correct mean is calculated for an array of scores
    const scores1 = [10, 20, 30, 40, 50]; 
    const calculatedMean1 = mean(scores1);
    const expectedMean1 = 30; 
    expect(calculatedMean1).toBe(expectedMean1); 

    // Test 2: Handle edge cases (empty array)
    const scores2 = []; 
    const calculatedMean2 = mean(scores2);
    const expectedMean2 = 0; 
    expect(calculatedMean2).toBe(expectedMean2); 

    // Test 3: Handle edge cases (array with a single element)
    const scores3 = [99]; 
    const calculatedMean3 = mean(scores3); 
    const expectedMean3 = 99;
    expect(calculatedMean3).toBe(expectedMean3);


  });
});
