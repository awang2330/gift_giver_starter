/* Barebones Simple Server */

const express = require("express") 
const morgan = require("morgan") // logger
const votingRouter = require("./routes/voting") // refernce to voting in voting.js

const app = express() // instance of express

/* use bare minimum logging (every request is run through morgan logging -> request type, route, time, metadata) */
app.use(morgan("tiny"))
app.use("/voting", votingRouter) // attach to /voting endpoint

/* Callback function, send back 200: good, 400: error, 500: internal server error*/
app.get("/", async(req, res, next) => {
  res.status(200).json({ ping: "pong" })
})

app.get("/hey", async(req, res, next) => {
  res.status(200).json({ ping: "pong" })
})

/* Listening to this port */
const port = 3000

app.listen(port, () => {
  console.log(module)
  console.log(`Server listening on port: ${port}`) 
})

