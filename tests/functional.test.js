import { expect, test } from 'vitest'
import slider from './slider.js'

test('throws an exception when data is invalid', () => {
  const options = {
    root: null,
    width: 750,
    height: 400,
    slides: [
      {
        color: '#c62828',
        text: 'RED'
      },
      {
        color: '#ad1457',
        text: 'PINK'
      },
      {
        color: '#6a1b9a',
        text: 'PURPLE'
      }
    ]
  }

  expect(() => slider(options)).toThrowError('The root is required.')
})

test('executes without an error', () => {
  const options = {
    root: '#slider',
    width: 750,
    height: 400,
    slides: [
      {
        color: '#c62828',
        text: 'RED'
      },
      {
        color: '#ad1457',
        text: 'PINK'
      },
      {
        color: '#6a1b9a',
        text: 'PURPLE'
      }
    ]
  }

  expect(slider(options)).toBe(null)
})
