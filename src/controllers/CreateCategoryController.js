const CreateCategoriesUseCase = require('../useCases/CreateCategoryUseCase')

module.exports = class CreateCategoryController {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  handle (req, res) {
    const categoryUseCase = new CreateCategoriesUseCase(this.categoriesRepository)
    const { name } = req.body
    categoryUseCase.execute(name)
    return res.status(200).send()
  }
}
