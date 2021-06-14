const express = require("express")
const { traditional } = require("../models/gift-exchange")
const giftExchange = require("../models/gift-exchange")
const router = express.Router()

router.get("/", async(req, res, next) => {
  res.status(200).json(gifts)
})

router.post("/pairs/:pairs", async(req, res, next) => {
  const names = req.body.names

  const pairs = await giftExchange.pairs(names)

  res.status(200).json(pairs)
})

router.post("/traditional/:traditional", async(req, res, next) => {
  const names = req.body.names

  const traditional = await giftExchange.traditional(names)

  res.status(200).json(traditional)
})

module.exports = router