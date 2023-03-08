const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', require('./app/routes'))

app.listen(3300, () => console.log("server running..."))
