const random = (min, max) => {
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