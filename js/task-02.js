const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsList = document.querySelector('ul#ingredients')

ingredients.forEach((ingredient) => {
  const li = document.createElement('li')
  li.textContent = ingredient
  li.classList.add('item')
  ingredientsList.appendChild(li)
})

// const firstEl = document.createElement(`li`)
// firstEl.classList.add = `item`
// firstEl.textContent = 'Potatoes'

// const secondEl = document.createElement(`li`)
// secondEl.classList.add = `item`
// secondEl.textContent = 'Mushrooms'

// const thirdEl = document.createElement(`li`)
// thirdEl.classList.add = `item`
// thirdEl.textContent = 'Garlic'

// const fourthEl = document.createElement(`li`)
// fourthEl.classList.add = `item`
// fourthEl.textContent = 'Tomatos'

// const fifthEl = document.createElement(`li`)
// fifthEl.classList.add = `item`
// fifthEl.textContent = 'Herbs'

// const sixthEl = document.createElement(`li`)
// sixthEl.classList.add = `item`
// sixthEl.textContent = 'Condiments'

// const itemAll = document.querySelector(`#ingredients`)
// itemAll.append(firstEl, secondEl, thirdEl, fourthEl, fifthEl, sixthEl)
// console.log(itemAll)
