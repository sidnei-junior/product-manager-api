module.exports = class UpdateCategoriesUseCase {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (id, name) {
    const category = this.categoriesRepository.findById(id)
    if (!category) {
      // todo: app error pra quando não achar a categoria
    }
    this.categoriesRepository.update(category, name)
  }
}
