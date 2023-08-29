import { expect, test } from 'vitest'
import slider from './slider.js'
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

const expect = require("chai").expect
const { JSDOM } = require("jsdom")

describe("updateMsg", function() {
  let jsdom
  before(async function() {
    jsdom = await JSDOM.fromFile("index.html", {
      resources: "usable",
      runScripts: "dangerously"
    })
    await new Promise(resolve =>
      jsdom.window.addEventListener("load", resolve)
    )
  })

  it('updates the innerHTML of element with id "msg"', function() {
    expect(jsdom.window.document.getElementById("msg").innerHTML).to.equal(
      "Hello, World!"
    )
    jsdom.window.updateMsg("The new msg!")
    expect(jsdom.window.document.getElementById("msg").innerHTML).to.equal(
      "The new msg!"
    )
  })
})
