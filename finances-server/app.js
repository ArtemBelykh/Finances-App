const express = require('express')
const app = express()
const port = 7000
const cors = require("cors");
const scoresRouter = require('./routes/scores.routes')
const recordsRouter = require('./routes/records.routes')
const budgetRouter = require('./routes/budget.routes')
const purposesRouter = require('./routes/purposes.routes')

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const corsOptions ={
  origin:'*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json())
app.use('/api', scoresRouter, recordsRouter, budgetRouter,purposesRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})