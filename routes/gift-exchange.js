const express = require("express")
const giftExchange = require("../models/gift-exchange")
const router = express.Router()

const gifts = {
  pen: 0,
  pencil: 0,
}

router.get("/", async(req, res, next) => {
  res.status(200).json(gifts)
})

router.post("/:giftName", async(req, res, next) => {
  const names = req.body.names

  console.log(names)

  const pairs = await giftExchange.pairs(names)

  res.status(200).json(pairs)
})

module.exports = router