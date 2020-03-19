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
    // new turn instance is created
    const turn = new Turn(guess, this.deck.cards[this.turns]);
    // console.log(this.deck.cards[this.turns]);
    
    //check the guess
    if (turn.evaluateGuess() === false){
     this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }

    //updates the turns count
    this.turns++

    //gives feedback
    turn.giveFeedback();

    //next card becomes currentCard
    this.returnCurrentCard();

  }

  calculatePercentCorrect(){
    let percentCorrect = ((this.turns - this.incorrectGuesses.length)/ this.turns) * 100;
    return `You got ${percentCorrect}% correct!`
    //return percentage of correct guesses
  }
}

module.exports = Round;
