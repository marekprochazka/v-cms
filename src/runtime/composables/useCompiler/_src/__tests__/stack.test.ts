import { test, expect } from 'vitest'
import { Stack } from '../stack'

test('stackPush', () => {
  const stack = new Stack<number>()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.length).toBe(3)
  expect(stack.top).toBe(3)
})

test('stackPop', () => {
  const stack = new Stack<number>()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  expect(stack.pop()).toBe(3)
  expect(stack.pop()).toBe(2)
  expect(stack.pop()).toBe(1)
  expect(stack.pop()).toBe(undefined)
  expect(stack.length).toBe(0)
  expect(stack.isEmpty).toBe(true)
})

test('stackClear', () => {
  const stack = new Stack<number>()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.clear()
  expect(stack.length).toBe(0)
  expect(stack.isEmpty).toBe(true)
})

test('isNotEmpty', () => {
  const stack = new Stack<number>()
  stack.push(1)
  expect(stack.isEmpty).toBe(false)
  expect(stack.length).toBe(1)
})
