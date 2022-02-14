
module.exports = class CreateCategoriesUseCase {
  constructor (categoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute (name) {
    // todo: criar regra de negócio em que não é permitido criar uma categoria com um nome já existente
    this.categoriesRepository.create(name)
  }
}
