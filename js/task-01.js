const categoriesAll = document.querySelector(`#categories`)
console.log(`Number of categories:`, categoriesAll.children.length)

const itemsEl = categoriesAll.querySelectorAll('li.item')

itemsEl.forEach((item) => {
  const titleEl = item.querySelector('h2').textContent
  console.log(`Category: ${titleEl}`)

  const numberEl = item.querySelectorAll('li').length
  console.log(`Elements: ${numberEl}`)
})
                            