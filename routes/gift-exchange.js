const express = require("express")
const { traditional } = require("../models/gift-exchange")
const giftExchange = require("../models/gift-exchange")
const router = express.Router()

router.get("/", async(req, res, next) => {
  try {
    const names = req.body.names
    res.status(200).json(names)
  } catch(err) {
    next(err)
  }
})

router.get("/quiz", async(req, res, next) => {
  try {
    const quizQuestions = await giftExchange.quiz()
    res.status(200).json(quizQuestions)
  } catch(err) {
    next(err)
  }
})

router.post("/pairs/:pairs", async(req, res, next) => {
  try {
    const names = req.body.names
    const pairs = await giftExchange.pairs(names)
    res.status(200).json(pairs)
  } catch(err) {
    next(err)
  }
})

router.post("/traditional/:traditional", async(req, res, next) => {
  try {
    const names = req.body.names
    const traditional = await giftExchange.traditional(names)
    res.status(200).json(traditional)
  } catch(err) {
    next(err)
  }
})

router.post("/quiz", async(req, res, next) => {
  try {
    const answers = req.body.userAnswers
    const points = await giftExchange.quizPoints(answers)
    res.json(points)
  } catch(err) {
    next(err)
  }
})

module.exports = router