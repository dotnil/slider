import { expect, describe, test } from 'vitest'
import slider from '../slider.js'
import { JSDOM } from 'jsdom'

test('throws an exception when data is invalid', () => {
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

  expect(() => slider(options)).toThrowError('The root is required.')
})

test('modify DOM', async function() {

  const jsdom = await JSDOM.fromFile('index.html', {
    resources: 'usable',
    runScripts: 'dangerously'
  })
  await new Promise(resolve =>
    jsdom.window.addEventListener('load', resolve)
  )
  await new Promise(r => setTimeout(r, 2000))
  console.log(jsdom.window.document.querySelector('.slider'))
  // })
  //
  // it('updates the innerHTML of element with id "msg"', function() {
  //   expect(jsdom.window.document.getElementById('msg').innerHTML).to.equal(
  //     'Hello, World!'
  //   )
  //
  // })
})
