const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express())
app.use(express.json())

app.use(routes)

const PORT = 4000
app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`))