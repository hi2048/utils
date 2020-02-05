const types = {
  'Number': 'Number',
  'String': 'String',
  'Boolean': 'Boolean',
  'Object': 'Object',
  'Array': 'Array',
  'Function': 'Function',
  'Date': 'Date',
  'RegExp': 'RegExp',
  'Symbol': 'Symbol',
  'null': 'Null',
  'NaN': 'NaN',
  'undefined': 'Undefined'
};

const isType = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`;

const isTypeFactory = types => {
  const isTypes = {};

  for(let key of Object.keys(types)) {
    if(types[key] === 'NaN') {
      isTypes['isNaN'] = isNaN;
    } else if(types[key] === 'Number') {
      isTypes['isNumber'] = obj => {
        if(isNaN(obj)) {
          return false;
        }

        return isType(types[key])(obj);
      };
    } else {
      isTypes[`is${types[key]}`] = isType(types[key]);
    }
  }

  return isTypes;
};

module.exports = { isNumber, isString, isBoolean, isObject, isArray, isFunction, isDate, isRegExp, isSymbol, isNull, isNaN, isUndefined } = isTypeFactory(types);

