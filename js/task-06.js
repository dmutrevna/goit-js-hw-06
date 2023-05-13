const inputValue = document.querySelector('#validation-input')
inputValue.addEventListener('input', inputText)

function inputText(event) {
  const textValue = event.target.value
  const lengthValue = inputValue.getAttribute('data-length')

  inputValue.classList.remove('valid', 'invalid')

  if (textValue.length === Number(lengthValue)) {
    inputValue.classList.add('valid')
  } else {
    inputValue.classList.add('invalid')
  }
}
console.log(inputValue)
