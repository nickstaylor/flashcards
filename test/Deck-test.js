const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card');


describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store new cards in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    deck.countCards();

    expect(deck.cards.length).to.equal(3);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should return number of cards', function(){
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')
    const deck = new Deck([card1, card6]);

    deck.countCards();
    expect(deck.cards.length).to.equal(2);
  })

});
