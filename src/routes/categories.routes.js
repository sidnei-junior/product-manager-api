const { Router } = require('express')
const CreateCategoryController = require('../controllers/CreateCategoryController')
const DeleteCategoryController = require('../controllers/DeleteCategoryController')
const ListCategoryController = require('../controllers/ListCategoryController')
const UpdateCategoryController = require('../controllers/UpdateCategoryController')
const CategoriesRepository = require('../repositories/CategoriesRepository')

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()
const createCategoryController = new CreateCategoryController(categoriesRepository)
categoriesRoutes.post('/', createCategoryController.handle.bind(createCategoryController))

const listCategoryController = new ListCategoryController(categoriesRepository)
categoriesRoutes.get('/list', listCategoryController.handle.bind(listCategoryController))

const updateCategoryController = new UpdateCategoryController(categoriesRepository)
categoriesRoutes.put('/:id/update', updateCategoryController.handle.bind(updateCategoryController))

const deleteCategoryController = new DeleteCategoryController(categoriesRepository)
categoriesRoutes.delete('/:id/delete', deleteCategoryController.handle.bind(deleteCategoryController))

module.exports = categoriesRoutes
