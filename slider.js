export default function slider(options) {
  validate(options)
  initSlider(options)
  insertSlides(options)
  swipeSlides(options)
}

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
  wrapper.style.width = `${width}px`
  wrapper.style.height = `${height}px`
}
