const formRef = document.querySelector(`.login-form`)

formRef.addEventListener(`submit`, onSubmit)

function onSubmit(evt) {
  evt.preventDefault()
  const emailEl = formRef.elements.email.value
  const passwordEl = formRef.elements.password.value

  if (emailEl === '' || passwordEl === '') {
    alert('Всі поля повинні бути заповнені')
  }

  const { email, password } = formRef.elements

  console.log(email)
  console.log(password)

  formRef.reset()
}
