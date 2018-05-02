const express = require('express')
const PORT = process.env.PORT || 3000;
// const app = express()
const bodyParser  = require('body-parser')
const morgan      = require('morgan')
const cors        = require('cors')
const app         = module.exports = express()
// const port        = parseInt(process.env.PORT || 3000)

app.get('/', (req, res) => res.send('Example app running'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))