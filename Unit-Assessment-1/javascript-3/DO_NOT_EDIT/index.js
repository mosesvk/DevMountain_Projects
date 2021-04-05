/* DO NOT EDIT CODE BELOW */
/* DO NOT EDIT CODE BELOW */
/* DO NOT EDIT CODE BELOW */

const groceryList = document.getElementById('grocery-list')
const groceryInput = document.getElementById('item')
const addItemBtn = document.getElementById('btn')
const title = document.getElementById('grocery-list-title')
const groceryStatus = document.getElementById('grocery-status')

title.innerText = setGroceryListTitle(yourName)
addItemBtn.addEventListener('click', () => addItem(groceryInput.value))

function displayData() {
  groceryStatus.innerText = checkGroceryCount()
  groceryList.innerHTML = ''
  for (let i = 0; i < groceries.length; i++) {
    const listItem = document.createElement('li')
    listItem.innerText = groceries[i]
    listItem.setAttribute('data-key', i)
    groceryList.appendChild(listItem)
    listItem.addEventListener('dblclick', () =>
      removeItem(listItem.dataset.key)
    )
  }
  groceryInput.value = ''
}
displayData()

/* DO NOT EDIT CODE ABOVE */
/* DO NOT EDIT CODE ABOVE */
/* DO NOT EDIT CODE ABOVE */
