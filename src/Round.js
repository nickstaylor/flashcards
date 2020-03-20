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
    //check the guess
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
// console.log(percentCorrect);
//   return `You got ${percentCorrect}% correct!`

  }

  endRound(){
    if (this.calculatePercentCorrect() > 90){
      console.log("Check out the BIG BRAIN on YOU!!!")
    }
    if(this.calculatePercentCorrect() === 100){
      console.log("Clearly, you had Kyle's help.  Do it yourself next time.  Loser!")
    }
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
