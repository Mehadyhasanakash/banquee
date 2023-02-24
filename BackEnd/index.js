const express = require('express')
const app = express()
const env = require('dotenv');

const bodyParser = require('body-parser')

env.config()

app.use(bodyParser())

// conect mongobd 
// mongodb+srv://<username>:<password>@cluster0.gflsp.mongodb.net/?retryWrites=true&w=majority


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/data', (req, res) => {
    res.status(500).json({
        massage: req.body
    })
  })



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}}`)
})