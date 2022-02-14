const DeleteCategoriesUseCase = require('../useCases/DeleteCategoryUseCase')

module.exports = class DeleteCategoryController {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  handle (req, res) {
    const deleteCategoryUseCase = new DeleteCategoriesUseCase(this.categoriesRepository)
    const id = req.params.id
    deleteCategoryUseCase.execute(id)
    return res.status(200).send()
  }
}
