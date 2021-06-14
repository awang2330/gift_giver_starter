
class giftExchange {

  /** This will pass the list of users that implements an algorithm 
  * responsible for randomly pairing users together.
  */ 
  static async pairs(names) {
    const allParings = []
    while (names.length > 0) {
      const paring = []
      var randomPair = Math.floor(Math.random() * names.length)
      paring.push(names[randomPair])
      names.splice(randomPair, 1)
      randomPair = Math.floor(Math.random() * names.length)
      paring.push(names[randomPair])
      names.splice(randomPair, 1)
      allParings.push(paring)
    }
    return allParings
  }

  static async traditional(names) {
    const wordsOfPairings = []
    var randomPair = Math.floor(Math.random() * names.length)
    const firstUser = names[randomPair]

    while (names.length > 1) {
      var words = `${names[randomPair]} is giving a gift to `
      names.splice(randomPair, 1)
      randomPair = Math.floor(Math.random() * names.length)
      words += names[randomPair]
      wordsOfPairings.push(words)
    }
    wordsOfPairings.push(`${names[randomPair]} is giving a gift to ${firstUser}`)
    return wordsOfPairings
  }
}

module.exports = giftExchange