const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsList = document.querySelector('ul#ingredients')

const markup = ingredients.map((ingredient) => {
  const li = document.createElement('li')
  li.textContent = ingredient
  li.classList.add('item')
  return li
})
ingredientsList.append(...markup)
