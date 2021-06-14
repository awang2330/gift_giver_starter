/* Barebones Simple Server */

const express = require("express") 
const morgan = require("morgan") // logger
const votingRouter = require("./routes/voting") // refernce to voting in voting.js
const giftExchangeRouter = require("./routes/gift-exchange")
const { NotFoundError, BadRequestError } = require("./utils/error")

const app = express() // instance of express

/* use bare minimum logging (every request is run through morgan logging -> request type, route, time, metadata) */
app.use(morgan("tiny"))
app.use(express.json()) // post request parsed as json
app.use("/voting", votingRouter) // attach to /voting endpoint
app.use("/gift-exchange", giftExchangeRouter)

/* Callback function, send back 200: good, 400: error, 500: internal server error*/
app.get("/", async(req, res, next) => {
  res.status(200).json({ ping: "pong" })
})

app.get("/hey", async(req, res, next) => {
  res.status(200).json({ ping: "pong" })
})

/* Handle all 404 errors that were not matched by a route */
app.use(async(req, res, next) => {
  return next(new NotFoundError())
})

/* Generic error handler: anything that is unhandled will be handled here */
app.use(async(err, req, res, next) => {
  const status = err.status || 500
  const message = err.message
  return res.status(status).json({
    err: { message, status},
  })
})
 
/* Listening to this port */
const port = 3000

app.listen(port, () => {
  // console.log(module)
  console.log(`Server listening on port: ${port}`) 
})

