function concatenateArray(arr) {
    return {
      toString: () => arr.join(','), 
      join: (separator = '') => arr.join(separator) 
    };
  }

  
  module.exports= concatenateArray;