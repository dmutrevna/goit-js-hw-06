const colorBtn = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')

colorBtn.addEventListener('click', changeBackgroundColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor
  colorSpan.textContent = randomColor
}
