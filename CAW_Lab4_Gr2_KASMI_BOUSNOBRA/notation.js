function mean(scores) {
    if (scores.length === 0) {
      return 0; 
    }
  
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }
  
  module.exports = mean;
  