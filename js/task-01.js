const categoriesAll = document.querySelector(`#categories`)
console.log(`Number of categories:`, categoriesAll.children.length)

const itemsEl = categoriesAll.querySelectorAll('li.item')

itemsEl.forEach((item) => {
  const titleEl = item.firstElementChild.textContent
  console.log(`Category: ${titleEl}`)

  const numberEl = item.lastElementChild.children.length
  console.log(`Elements: ${numberEl}`)
})
