const { isNumber, isUndefined } = require('../type');

/**
 * 
 * @param {int} min default 1
 * @param {int} max default 10
 * 
 * @return [min, max] random number
 */
const random = (min, max) => {
  if(isUndefined(min) && isUndefined(max)) {
    min = 1;
    max = 10;
  }

  if(!isNumber(min)) {
    throw new Error('Expected the parameter to be a number.');
  }

  if(isUndefined(max)) {
    max = min;
    min = max < 1?max : 1;
  }

  if(min > max) {
    throw new Error('Expected arg2 larger than arg1.');
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getNRandomNumbers = (k, scope, isRepeat = false) => {
  const ret = new Array();

  while(k > 0) {
    const no = random(scope.min, scope.max);

    if(!isRepeat && ret.indexOf(no) !== -1) {
      continue;
    }

    ret.push(no);
    k--;
  }

  return ret;
}

const prefixZero = (num, n) => {
  return (Array(n).join(0) + num).slice(-n);
}

module.exports = {
  random,
  getNRandomNumbers,
  prefixZero
};