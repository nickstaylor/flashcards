class Turn{
  constructor(guess, card){
    this.guess = guess;
    this.guessisCorrect = false;
    this.card = []
  }

  returnGuess(guess){
  return this.guess;
  }

  returnCard(card){
  this.card.push(card);
  }

  evaluateGuess(card){
    if (this.guess === card.correctAnswer){
      this.guessisCorrect = true;
      this.giveFeedback();
    } else {
      this.guessisCorrect = false;
      this.giveFeedback();
    }
  }

  giveFeedback(){
    if (this.guessisCorrect === true){
      return `correct!`
    } else {
      return 'incorrect!'
    }

  }
}

module.exports = Turn
