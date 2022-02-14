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
}
