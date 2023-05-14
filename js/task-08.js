const formRef = document.querySelector(`.login-form`)

formRef.addEventListener(`submit`, onSubmit)

function onSubmit(evt) {
  evt.preventDefault()
  const emailEl = formRef.elements.email.value
  const passwordEl = formRef.elements.password.value

  if (emailEl === '' || passwordEl === '') {
    alert('Всі поля повинні бути заповнені')
    return
  }

  const formEl = {
    email: emailEl,
    password: passwordEl,
  }

  console.log(formEl)

  formRef.reset()
}
