const Category = require('../entities/Category')
module.exports = class CategoriesRepository {
  constructor () {
    this.categories = []
  }

  create (categoryName) {
    const category = new Category()
    const categoryObject = category.create(categoryName)
    this.categories.push(categoryObject)
  }

  list () {
    return this.categories
  }

  findById (id) {
    return this.categories.findIndex(category => category.id === id)
  }

  update (categoryIndex, name) {
    this.categories[categoryIndex].name = name
  }
}
