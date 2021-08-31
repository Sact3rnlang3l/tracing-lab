const express = require("express")
const path = require("path")
const Rollbar = require("rollbar")

let rollbar = new Rollbar({
  accessToken: "a9512868c7d042e9a5f3b86f0d82af42",
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"))
  rollbar.info(
    "html file served like a good steak entree at an upscale restraunt"
  )
})
try {
  nonExistentFunction()
} catch (error) {
  rollbar.error('Function does not exist')
}

app.post('/api/button', ()=>{
    rollbar.warning('First Chance to Stop')
    return 'Stop it'
    rollbar.critical('Stop it')
})



app.use(rollbar.errorHandler())

app.listen(4040, () => console.log("Loud and Clear on 4040"))

const port = process.env.PORT || 4040

app.listen(port, () => console.log(`Loud and clear on ${port}`))
