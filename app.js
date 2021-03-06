const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 4041

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/', require('./routes/users'))

app.listen(port, () => {
  console.log(`server is running an port ${port}`)
})
