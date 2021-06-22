const { expect, test, describe } = require('@jest/globals')

const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions.js')

test('should expect function to equal 2', function() {
  expect(returnTwo()).toBe(2)
})

describe('greeting tests', function() {
  test('should return string of hello, James', function() {
    expect(greeting('James')).toBe('Hello, James')
  })

  test('greeting should return hello JIll', function() {
    expect(greeting('Jill')).toBe('Hello, Jill')
  })

})

describe('multiply function test', function() {
  test('add function test 1', function() {
    expect(add(1, 2)).toEqual(3)
  })
  test('add function test 2', function() {
    expect(add(5, 9)).toEqual(14)
  })
  test('multiple function test 1', function() {
    expect(multiply(1, 1)).toEqual(1)
  })
  test('multiply function test 2', function() {
    expect(multiply(5, 5)).toEqual(25)
  })
  test('divide function test 1', function() {
    expect(divide(25, 5)).toEqual(5)
  })
  test('divide function test 2', function() {
    expect(divide(15, 3)).toEqual(5)
  })
  test('subtract function test 1', function() {
    expect(subtract(20, 5)).toEqual(15)
  })
  test('subtract function test 2', function() {
    expect(subtract(30, 15)).toEqual(15)
  })
})

