const { NotFoundError, BadRequestError } = require("../utils/error")

const voting = {
  pepperoni: [],
  cheese: [],
  hawaiian: [],
}

class Voting {
  static async tallyVotes() {

    const votingResults = {
      pepperoni: voting.pepperoni.length,
      cheese: voting.cheese.length,
      hawaiian: voting.hawaiian.length,
    }
    return votingResults
  }

  static async recordVotes(pizzaName, user) {
    if (!user) {
      throw new BadRequestError("You must have a user in the request body to vote.")
    }
    if (!voting[pizzaName]) {
      throw new NotFoundError("That pizza name is not part of the poll")
    }
    if (voting[pizzaName].includes(user)) {
      throw new BadRequestError("That user has already voted for that pizza.")
    }

    voting[pizzaName].push(user)
    return Voting.tallyVotes()
  }
}

module.exports = Voting