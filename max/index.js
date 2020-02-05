const max = (...args) => {
  return args.reduce((a, b) => {
    b = Array.isArray(b)?max(...b) : b;
    
    return a > b?a : b;
  }, -Infinity);
}

module.exports = max;