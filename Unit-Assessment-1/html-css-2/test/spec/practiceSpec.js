//Helper Functions
const searchFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:4610/api/search`, {pathArr, strArr})
  return response.data
}

//Test Suite
describe('Unit Assessment 1 - HTML & CSS Sections 1 & 2', () => {
  describe('The following HTML tags are used in index-1.html and/or index-2.html', () => {
    let htmlFiles = ['html-css-1/index-1.html', 'html-css-2/index-2.html']

    it('link', async () => {
      let itemsToCheck = [
        '<link'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('title', async () => {
      let itemsToCheck = [
        '<title',
        '</title>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('doctype', async () => {
      let itemsToCheck = [
        '<!DOCTYPEhtml>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('head', async () => {
      let itemsToCheck = [
        '<head',
        '</head>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('meta', async () => {
      let itemsToCheck = [
        '<meta'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('h1', async () => {
      let itemsToCheck = [
        '<h1',
        '</h1>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('h2', async () => {
      let itemsToCheck = [
        '<h2', 
        '</h2>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('p', async () => {
      let itemsToCheck = [
        '<p', 
        '</p>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('br', async () => {
      let itemsToCheck = [
        '<br'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('body', async () => {
      let itemsToCheck = [
        '<body', 
        '</body>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('img', async () => {
      let itemsToCheck = [
        '<img'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('div', async () => {
      let itemsToCheck = [
        '<div', 
        '</div>'
      ]
      let result = await searchFiles(htmlFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

  })

  describe('The following CSS selectors and properties are used in style-1.css and/or style-2.css', function () {
    let cssFiles = ['html-css-1/style-1.css', 'html-css-2/style-2.css']
   
    it('margin', async () => {
      let itemsToCheck = [
        'margin:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('padding', async () => {
      let itemsToCheck = [
        'padding:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('border', async () => {
      let itemsToCheck = [ 
        'border:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('border-radius', async () => {
      let itemsToCheck = [
        'border-radius:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('height', async () => {
      let itemsToCheck = [
        'height:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('width', async () => {
      let itemsToCheck = [
        'width:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('box-sizing', async () => {
      let itemsToCheck = [
        'box-sizing:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('display', async () => {
      let itemsToCheck = [
        'display:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('font-size', async () => {
      let itemsToCheck = [ 
        'font-size:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('text-align', async () => {
      let itemsToCheck = [
        'text-align:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

    it('background-color', async () => {
      let itemsToCheck = [
        'background-color:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })


    it('box-shadow', async () => {
      let itemsToCheck = [
        'box-shadow:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })


    it('float', async () => {
      let itemsToCheck = [
        'float:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })


    it('clear', async () => {
      let itemsToCheck = [
        'clear:'
      ]
      let result = await searchFiles(cssFiles, itemsToCheck)
      expect(result).toEqual(true)
    })

  })

})
