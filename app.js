const slides = document.querySelectorAll('.slide')

slides.forEach((item) =>
  item.addEventListener('click', (e) => {
    clearActive(e.target)
    e.target.classList.toggle('active')
  })
)

function clearActive(elem) {
  slides.forEach((item) => {
    if (elem === item) {
      return
    }
    item.classList.remove('active')
  })
}
