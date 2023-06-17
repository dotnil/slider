function swipeSlide(index) {
  const slider = document.querySelector('.slider')
  const shift = -750 * index

  slider.style.transform=`translateX(${shift}px)`
}

function swipeSlides(options) {
  const delay = options.delay || 2500
  options.slides.forEach((currentElement, index) => {
    setTimeout(() => {
      swipeSlide(index)
    }, index * delay)
  })
}

function insertSlides(options) {
  const slider = document.querySelector('.slider')

  const width = options.width || 750
  const slidesHTML = options.slides.map((item) =>
    `<div class='slider__item' style='background: ${item.color}; min-width: ${width}px'>${item.text}</div>`).join('')
  slider.innerHTML = slidesHTML
}

function validate(options) {
  if (options.root == undefined) { throw 'The root is required.' }
  if (options.slides == undefined) { throw 'The slides are required.' }
}

function initSlider(options) {
  const wrapper = document.querySelector(options.root)
  wrapper.innerHTML = '<div class="slider"></div>'

  const width = options.width || 750
  const height = options.height || 400
  wrapper.style.width = `${options.width}px`
  wrapper.style.height = `${options.height}px`
}

function slider(options) {
  validate(options)
  initSlider(options)
  insertSlides(options)
  swipeSlides(options)
}

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
    },
    {
      color: '#4527a0',
      text: 'DEEP_PURPLE'
    },
    {
      color: '#283593',
      text: 'INDIGO'
    },
    {
      color: '#1565c0',
      text: 'BLUE'
    },
    {
      color: '#0277bd',
      text: 'LIGHT_BLUE'
    },
    {
      color: '#00838f',
      text: 'CYAN'
    },
    {
      color: '#00695c',
      text: 'TEAL'
    },
    {
      color: '#2e7d32',
      text: 'GREEN'
    },
    {
      color: '#558b2f',
      text: 'LIGHT_GREEN'
    },
    {
      color: '#827717',
      text: 'LIME'
    },
    {
      color: '#ef6c00',
      text: 'ORANGE'
    },
    {
      color: '#d84315',
      text: 'DEEP_ORANGE'
    },
    {
      color: '#4e342e',
      text: 'BROWN'
    }
  ]
}

slider(options)
