const fontSize = document.querySelector('#font-size-control')
const textSpan = document.querySelector('#text')

fontSize.addEventListener('input', () => {
  const fontSizeValue = fontSize.value + 'px'
  textSpan.style.fontSize = fontSizeValue
})
