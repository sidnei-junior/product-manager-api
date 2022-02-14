const express = require('express')

const { router } = require('./routes/routes')

const app = express()
app.use(express.json())

app.use(router)

app.listen(3334, () => console.log('Server is running!'))
