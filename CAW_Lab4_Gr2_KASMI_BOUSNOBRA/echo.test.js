const { exf } = require('./echo'); 

describe('exf function tests', () => {
  it('should print the string n times', () => {
    
    const mockConsoleLog = jest.spyOn(console, 'log'); 
    exf('Test', 3); 
    expect(mockConsoleLog).toHaveBeenCalledTimes(3); 

    
    exf(123, 5); 
    expect(mockConsoleLog).toHaveBeenCalledTimes(8);


    exf('Another Test', 0); 
    expect(mockConsoleLog).toHaveBeenCalledTimes(8); 

  });
});
