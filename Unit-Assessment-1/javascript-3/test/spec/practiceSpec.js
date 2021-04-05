//Test Suite
const displayData = () => null

const countFiles = async (path, str, count) => {
  let response = await axios.get(`http://localhost:4610/api/count?path=${path}&str=${str}&count=${count}`)
  return response.data
}

const jsFile = 'javascript-3/practice-js-3.js'

describe('Unit Assessment 2 - JavaScript 3', function () {
  describe('Step 1', () => {
    it('groceries should exist', () => {
      expect(groceries).toBeDefined()
    })
    it('should be anarray', () => {
      expect(Array.isArray(groceries)).toBeTrue()
    })
  })

  describe('Step 2', () => {
    it('yourName should exist', () => {
      expect(yourName).toBeDefined()
    })
    it('should be a string', () => {
      expect(typeof yourName).toBe('string')
    })
  })

  describe('Step 3', () => {
    it('setGroceryListTitle should exist', () => {
      expect(setGroceryListTitle).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof setGroceryListTitle).toBe('function')
    })
    it('should return correct value', () => {
      expect(setGroceryListTitle('name')).toBe("name's Grocery List")
    })
  })

  describe('Step 4', () => {
    it('addItem should exist', () => {
      expect(addItem).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof addItem).toBe('function')
    })
    it('should perform the correct operation', () => {
      addItem('milk')
      expect(groceries).toEqual(jasmine.arrayContaining(['milk']))
    })
  })

  describe('Step 5', () => {
    it('removeItem should exist', () => {
      expect(removeItem).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof removeItem).toBe('function')
    })
    it('should perform the correct operation', () => {
      removeItem(groceries.length - 1)
      expect(groceries).not.toEqual(jasmine.arrayContaining(['milk']))
    })
    it('should use splice', async function() {
      let result = await countFiles(jsFile, '.splice(', 1)
      expect(result).toEqual(true)
    })
  })

  describe('Step 6', () => {
    it('checkGroceryCount should exist', () => {
      expect(checkGroceryCount).toBeDefined()
    })
    it('should be a function', () => {
      expect(typeof checkGroceryCount).toBe('function')
    })
    it('should show 1 item if there is 1 item', () => {
      groceries.splice(0, Infinity)
      groceries.push(0)
      expect(checkGroceryCount()).toEqual('1 item')
    })
    it(`should show the number of items when it isn't 1 or more than 5`, () => {
      groceries.splice(0, Infinity)
      groceries.push(0, 1, 2)
      expect(checkGroceryCount()).toEqual('3 items')
    })
    it('should display the message when there are more than 5 items', () => {
      groceries.splice(0, Infinity)
      groceries.push(0, 1, 2, 3, 4, 5, 6, 7)
      expect(checkGroceryCount()).toEqual('That looks like a big trip')
    })
  })
})
