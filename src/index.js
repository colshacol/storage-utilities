const stringify = target => {
  return typeof target === 'string'
    ? target
    : typeof target === 'undefined'
      ? 'undefined'
      : JSON.stringify(target)
}

const parse = target => {
  try {
    return JSON.parse(target)
  } catch (error) {
    return target
  }
}

const stringifyValues = target => {
  return Object.entries(target).reduce((final, [key, value]) => {
    final[key] = stringify(value)
    return final
  }, {})
}

const parseValues = target => {
  return Object.entries(target).reduce((final, [key, value]) => {
    final[key] = parse(value)
    return final
  }, {})
}

module.exports = {
  stringifyValues,
  parseValues,
  stringify,
  parse
}
