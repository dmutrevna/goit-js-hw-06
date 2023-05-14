const userName = document.querySelector(`#name-input`)
const textValue = document.querySelector(`#name-output`)

userName.addEventListener(`input`, onClick)

function onClick(event) {
  if (userName.value === '') {
    textValue.textContent = 'Anonymous'
  } else {
    textValue.textContent = event.currentTarget.value
  }
}
