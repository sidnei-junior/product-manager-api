const ListCategoriesUseCase = require('../useCases/ListCategoryUseCase')

module.exports = class ListCategoryController {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  handle (req, res) {
    const listCategoryUseCase = new ListCategoriesUseCase(this.categoriesRepository)
    const list = listCategoryUseCase.execute()
    return res.status(200).json(list)
  }
}
