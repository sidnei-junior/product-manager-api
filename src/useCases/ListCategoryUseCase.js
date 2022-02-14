
module.exports = class ListCategoriesUseCase {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (name) {
    // todo: criar regra de negócio em que não é permitido criar uma categoria com um nome já existente
    return this.categoriesRepository.list(name)
  }
}
