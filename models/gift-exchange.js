const { BadRequestError } = require("../utils/error") 

class giftExchange {

  /** This will pass the list of users that implements an algorithm 
  * responsible for randomly pairing users together.
  */ 
  static async pairs(names) {
    const allParings = []

    if (names == undefined) {
      throw new BadRequestError("No names array in POST body found.")
    }

    if (names.length % 2 == 1) {
      throw new BadRequestError("The number of users should be even for matching pairs.")
    }

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

  static async quiz() {
    const multipleChoice = [
      {
        question: "1+1=",
        answers: [
          "a. 11",
          "b. 2",
          "c. 田",
          "d. window"
        ]
      },
      {
        question: "sleep+eat+play=",
        answers: [
          "a. lazy",
          "b. life",
          "c. lame",
          "d. love"
        ]
      },
    ]
    return multipleChoice
  }

  static async quizPoints(answers) {
    const multipleChoicePoints = [
      {
        "a": 1,
        "b": 3,
        "c": 2,
        "d": 0
      },
      {
        "a": 1,
        "b": 3,
        "c": 0,
        "d": 2
      }
    ]

    if (answers == undefined) {
      throw new BadRequestError("No userAnswers array found in POST body.")
    }


    var points = 0
    answers.forEach((element, index) => {
      if (element == "a" || element == "b" || element == "c" || element == "d") {
        points += multipleChoicePoints[index][element]
      }
      else {
        throw new BadRequestError(element + " is not an answer choice.")
      }
      
    })

    return points
  }
}

module.exports = giftExchange