const { Router } = require('express')

const categoriesRoutes = require('./categories.routes')

const router = Router()
router.use('/categories', categoriesRoutes)

module.exports = { router }
