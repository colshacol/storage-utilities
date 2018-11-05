const { stringify, parse, parseValues, stringifyValues } = require('../')

describe('stringify', () => {
  test('it stringifies non-strings', () => {
    expect(stringify(1)).toBe('1')
    expect(stringify({})).toBe('{}')
    expect(stringify([1])).toBe('[1]')
    expect(stringify(true)).toBe('true')
    expect(stringify(null)).toBe('null')
    expect(stringify(undefined)).toBe('undefined')
  })
})

describe('parse', () => {
  test('it parses things', () => {
    expect(parse('1')).toEqual(1)
    expect(parse('true')).toEqual(true)
    expect(parse('null')).toEqual(null)
    expect(parse('[]')).toEqual([])
    expect(parse('undefined')).toEqual('undefined')
    expect(parse('{}')).toEqual({})
  })

  test('it skips out on non parseable shit', () => {
    expect(parse('yolo')).toEqual('yolo')
    expect(parse('[{]]')).toEqual('[{]]')
  })
})

const mockStorage = {
  a: '',
  b: 0,
  c: true,
  d: null,
  e: [1, 2, 3],
  f: { stub: 'STUB' }
}

const mockStorageStringified = {
  a: '',
  b: '0',
  c: 'true',
  d: 'null',
  e: '[1,2,3]',
  f: '{"stub":"STUB"}'
}

describe('parseValues', () => {
  const mock = stringifyValues(mockStorage)

  test('it parses good', () => {
    expect(parseValues(mockStorage)).toEqual(mockStorage)
  })
})

describe('stringifyValues', () => {
  test('it parses good', () => {
    expect(stringifyValues(mockStorage)).toEqual(mockStorageStringified)
  })
})
