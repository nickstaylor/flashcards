const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(deck){
    return this.deck.cards[this.turns];
  }

  takeTurn(guess){
    const turn = new Turn(guess, this.deck.cards[this.turns]);
    if (turn.evaluateGuess() === false){
     this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }
    this.turns++
    return turn.giveFeedback();
    this.returnCurrentCard();
  }

  calculatePercentCorrect(){
    let percentCorrect = ((this.turns - this.incorrectGuesses.length)/ this.turns) * 100;
    return Math.round(percentCorrect);
  }

  endRound(){
    if (this.calculatePercentCorrect() > 90){
      console.log("Check out the BIG BRAIN on YOU!!!")
    }
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
