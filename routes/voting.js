const express = require("express")
const Voting = require("../models/voting")
const router = express.Router()

router.get("/", async(req, res, next) => {
  try {
    const votes = await Voting.tallyVotes()
    res.status(200).json(votes)
  } catch(err) {
    next(err)
  }
  
})

/* Colon is placeholder for path paramter */
router.post("/:pizzaName", async(req, res, next) => {
  try {
    console.log(req.body)
    const pizzaName = req.params.pizzaName
    const user = req.body.user
    const votes = await Voting.recordVotes(pizzaName, user)
    res.status(200).json(votes)
  } catch(err) {
    next(err)
  }
})

/* Allow other parts of applciation access to this router */
module.exports = router

