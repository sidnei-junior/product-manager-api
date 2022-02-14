const { v4 } = require('uuid')

module.exports = class Category {
  create (name) {
    return {
      id: v4(),
      name: name,
      created_at: new Date().getTime()
    }
  }
}
