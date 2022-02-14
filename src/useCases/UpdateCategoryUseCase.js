module.exports = class UpdateCategoriesUseCase {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (id, name) {
    const categoryIndex = this.categoriesRepository.findById(id)
    if (!this.categoriesRepository[categoryIndex]) {
      // todo: app error pra quando não achar a categoria
    }
    this.categoriesRepository.update(categoryIndex, name)
  }
}
