const data = require('./data');
const prototypeQuestions = data.prototypeData;
const testQuestions = [prototypeQuestions[0], prototypeQuestions[1], prototypeQuestions[2]];
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = {}
  }

  start(){
    let cards = prototypeQuestions.map(function(item){
        let card = new Card(item.id, item.question, item.answers, item.correctAnswer)
        return card
    });
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards. Good Luck Sparky!
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
