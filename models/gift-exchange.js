
class giftExchange {
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
}

module.exports = giftExchange