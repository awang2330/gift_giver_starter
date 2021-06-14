const express = require("express")
const Voting = require("../models/voting")
const router = express.Router()

router.get("/", async(req, res, next) => {
  const votes = await Voting.tallyVotes()
  res.status(200).json(votes)
})

/* Colon is placeholder for path paramter */
router.post("/:pizzaName", async(req, res, next) => {
  console.log(req.body)

  const pizzaName = req.params.pizzaName
  
  const user = req.body.user
  const votes = await Voting.recordVotes(pizzaName, user)
  res.status(200).json(votes)
})

/* Allow other parts of applciation access to this router */
module.exports = router

