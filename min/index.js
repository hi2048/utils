const min = (...args) => {
  return args.reduce((a, b) => {
    b = Array.isArray(b)?min(...b) : b;
    
    return a < b?a : b;
  }, Infinity);
}

module.exports = min;