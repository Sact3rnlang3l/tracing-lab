const express = require("express")
const path = require("path")
// const Rollbar = require("rollbar")

const app = express()
app.use('/style', express.static('/public/styles.css'))
