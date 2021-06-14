
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
    if (voting[pizzaName]) {
      if (!voting[pizzaName].includes(user)) 
        voting[pizzaName].push(user)
    }

    return Voting.tallyVotes()
  }
}

module.exports = Voting