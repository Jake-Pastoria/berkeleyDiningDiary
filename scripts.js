const express = require("express")
const app = express()

var cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connect().catch(err => console.log(err))

async function connect() {
  await mongoose.connect(/* YOUR CONNECTION STRING HERE */)
  console.log("Successfully connected to MongoDB")
}