const { isObject } = require('../type');

const equals = (origin = {}, target = {}) => {
  if(origin === target)
    return true;

  const keys = Object.getOwnPropertyNames(origin);

  for(let key of keys) {
    const originValue = origin[key];
    const targetValue = target[key];

    if(isObject(originValue) && isObject(targetValue)) {
      if(!equals(originValue, targetValue)) {
        return false;
      }
    } else {
      if(originValue !== targetValue) {
        return false;
      }
    }
  }

  return true;
}

const clone = (target = {}, origin = {}) => {
  const keys = Object.getOwnPropertyNames(origin);

  for(let key of keys) {
    if(isObject(origin[key])) {
      clone(target[key], origin[key]);
    } else {
      target[key] = origin[key];
    }
  }

  return target;
}

module.exports = {
  equals,
  clone
};