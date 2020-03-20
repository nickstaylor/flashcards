const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn1 = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn1 = new Turn();
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
    ["mutator method", "accessor method", "iteration method"],"accessor method")
    const turn1 = new Turn( 'pug', card1);
    const turn2 = new Turn('accessor method', card2)

    expect(turn1.guess).to.equal('pug');
    expect(turn2.guess).to.equal('accessor method');
  });

  it('should take in a card instance', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
    ["mutator method", "accessor method", "iteration method"],"accessor method")
    const turn1 = new Turn( 'pug', card1);
    const turn2 = new Turn('accessor method', card2);

    turn1.returnCard();
    expect(turn1.card).to.equal(card1);
    turn2.returnCard();
    expect(turn2.card).to.equal(card2);
  });

  it('should determine if the user guess is correct', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('pug', card1);
    const card2 = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
    ["mutator method", "accessor method", "iteration method"],"accessor method")
    const turn2 = new Turn('accessor method', card2);

    turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(false);
    turn1.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('incorrect. But you\'re still awesome! Hit return.');
    turn2.evaluateGuess();
    turn2.giveFeedback();
    expect(turn2.giveFeedback()).to.equal('correctamundo! Hit return Sparky.');
  })
});
