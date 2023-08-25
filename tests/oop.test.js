import { expect, test } from 'vitest'
import Slider from './oop/slider.js'

test('Slider instance', () => {
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
  const slider = new Slider(options.root, options.slides)

  expect(slider.root).toBe('#slider')
})

test('Throws an exception when data is invalid', () => {
  const options = {
    root: undefined,
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

  expect(() => new Slider(options.root, options.slides).toThrowError('The root is required.'))
})
