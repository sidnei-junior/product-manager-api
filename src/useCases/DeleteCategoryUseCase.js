module.exports = class DeleteCategoriesUseCase {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (id) {
    const categoryIndex = this.categoriesRepository.findById(id)
    if (!this.categoriesRepository[categoryIndex]) {
      // todo: app error pra quando não achar a categoria
    }
    this.categoriesRepository.remove(categoryIndex)
  }
}
