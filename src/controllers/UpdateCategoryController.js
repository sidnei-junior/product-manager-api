const UpdateCategoriesUseCase = require('../useCases/UpdateCategoryUseCase')

module.exports = class UpdateCategoryController {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  handle (req, res) {
    const updateCategoryUseCase = new UpdateCategoriesUseCase(this.categoriesRepository)
    const id = req.params.id
    const { name } = req.body
    updateCategoryUseCase.execute(id, name)
    return res.status(200).send()
  }
}
