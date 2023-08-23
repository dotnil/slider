export default class Slider {
  constructor(root,  slides, width = 750, height = 400, delay = 2500) {
    this.root = root
    this.slides = slides
    this.width = width
    this.height = height
    this.delay = delay

    this.validate()
  }

  validate() {
    if (this.root == undefined) { throw 'The root is required.' }
    if (this.slides == undefined) { throw 'The slides are required.' }
  }

  initSlider() {
    const wrapper = document.querySelector(this.root)
    wrapper.innerHTML = '<div class="slider"></div>'

    const width = this.width
    const height = this.height
    wrapper.style.width = `${width}px`
    wrapper.style.height = `${height}px`
  }

  insertSlides() {
    const slider = document.querySelector('.slider')

    const slidesHTML = this.slides.map((item) =>
      `<div class='slider__item' style='background: ${item.color}; min-width: ${this.width}px'>${item.text}</div>`).join('')
    slider.innerHTML = slidesHTML
  }

  swipeSlide(index) {
    const slider = document.querySelector('.slider')
    const shift = -750 * index

    slider.style.transform=`translateX(${shift}px)`
  }

  swipeSlides() {
    const delay = this.delay
    const slides = this.slides

    slides.forEach((currentElement, index) => {
      setTimeout(() => {
        this.swipeSlide(index)
      }, index * delay)
    })
  }
}
