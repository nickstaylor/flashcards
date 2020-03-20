class Turn{
  constructor(guess, card){
    this.guess = guess;
    this.card = card
  }

  returnGuess(){
    return this.guess;
  }

  returnCard(){
    return this.card;
  }

  evaluateGuess(){
    if (this.guess === this.card.correctAnswer){
      return true;
    }
    return false;
  }

  giveFeedback(){
    if (this.evaluateGuess() === true){
      return 'correctamundo! Hit return Sparky.'
    }
      return `incorrect. But you're still awesome! Hit return.`
  }
}

module.exports = Turn
