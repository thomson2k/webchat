const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()


app.use('/', express.static(
  path.resolve('../chat/build')
))

app.use(bodyParser.json())

const statements = []

app.get('/statments', (req,res) => {
  res.send(statments)
})

app.post('/statements', (req, res) => {
  console.log(req.body)
  res.send('ok')
})

app.listen(3010)
