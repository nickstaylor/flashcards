class Deck {
  constructor(card){
    this.cards = []
  }

  countCards(){
    return this.cards.length;
  }

  addCard(card){
    this.cards.push(card);
  }
}

module.exports = Deck;
