//Test Suite
function stringContaining(subStr) {
  return {
    asymmetricMatch: function (compareTo) {
      return compareTo.includes(subStr) ? true : false
    },
    jasmineToString: function () {
      return '[correct string]'
    },
  }
}

describe('Unit Assessment 1 - JavaScript 2', function () {
  describe('Problem 1 - Git Definition', function () {
    it('gitDefinition variable should exist', function () {
      expect(gitDefinition).toBeDefined()
    })
    it('should be a string', function () {
      expect(typeof gitDefinition).toBe('string')
    })
  })

  describe('Problem 2 - GitHub Definition', function () {
    it('faveNum variable should exist', function () {
      expect(gitHubDefinition).toBeDefined()
    })
    it('should be a string', function () {
      expect(typeof gitHubDefinition).toBe('string')
    })
  })

  describe('Problem 3 - init', function () {
    it('init variable should exist', function () {
      expect(init).toBeDefined()
    })
    it('should be an object', function () {
      expect(typeof init).toBe('object')
    })
    it('should contain description and code key value pairs', function () {
      expect(init).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it(`code property's value should be the correct git command`, function () {
      expect(init).toEqual(
        jasmine.objectContaining({ code: stringContaining('git init') })
      )
    })
  })

  describe('Problem 4 - clone', function () {
    it('clone variable should exist', function () {
      expect(clone).toBeDefined()
    })
    it('should be an object', function () {
      expect(typeof clone).toBe('object')
    })
    it('should contain description and code key value pairs', function () {
      expect(clone).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it(`code property's value should be the correct git command`, function () {
      expect(clone).toEqual(
        jasmine.objectContaining({ code: stringContaining('git clone') })
      )
    })
  })

  describe('Problem 5 - status', function () {
    it('status variable should exist', function () {
      expect(status).toBeDefined()
    })
    it('should be an object', function () {
      expect(typeof status).toBe('object')
    })
    it('should contain description and code key value pairs', function () {
      expect(status).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it(`code property's value should be the correct git command`, function () {
      expect(status).toEqual(
        jasmine.objectContaining({ code: stringContaining('git status') })
      )
    })
  })

  describe('Problem 6 - add', function () {
    it('add variable should exist', function () {
      expect(add).toBeDefined()
    })
    it('should be an object', function () {
      expect(typeof add).toBe('object')
    })
    it('should contain description and code key value pairs', function () {
      expect(add).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it(`code property's value should be the correct git command`, function () {
      expect(add).toEqual(
        jasmine.objectContaining({ code: stringContaining('git add') })
      )
    })
  })

  describe('Problem 7 - commit', function () {
    it('commit variable should exist', function () {
      expect(commit).toBeDefined()
    })
    it('should be an object', function () {
      expect(typeof commit).toBe('object')
    })
    it('should contain description and code key value pairs', function () {
      expect(commit).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it(`code property's value should be the correct git command`, function () {
      expect(commit).toEqual(
        jasmine.objectContaining({ code: stringContaining('git commit -m') })
      )
    })
  })

  describe('Problem 8 - add remote origin', function () {
    it('addRemote variable should exist', function () {
      expect(addRemote).toBeDefined()
    })
    it('should be an object', function () {
      expect(typeof addRemote).toBe('object')
    })
    it('should contain description and code key value pairs', function () {
      expect(addRemote).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it(`code property's value should be the correct git command`, function () {
      expect(addRemote).toEqual(
        jasmine.objectContaining({
          code: stringContaining('git remote add origin'),
        })
      )
    })
  })

  describe('Problem 9 - push', function () {
    it('push variable should exist', function () {
      expect(push).toBeDefined()
    })
    it('should be an object', function () {
      expect(typeof push).toBe('object')
    })
    it('should contain description and code key value pairs', function () {
      expect(push).toEqual(
        jasmine.objectContaining({
          description: jasmine.any(String),
          code: jasmine.any(String),
        })
      )
    })
    it(`code property's value should be the correct git command`, function () {
      expect(push).toEqual(
        jasmine.objectContaining({
          code: stringContaining('git push'),
        })
      )
    })
  })
})
