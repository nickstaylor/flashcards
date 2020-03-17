const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');


describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user guess', function() {
    const turn = new Turn( 'pug', 'card');
    expect(turn.guess).to.equal('pug');
  });

  it('should take in a card instance', function() {
    const card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const turn = new Turn( 'pug', {card});

    turn.returnCard(card);
    expect(turn.card).to.deep.equal([card]);
  });

  it('should determine if the user guess is correct', function(){
    const card = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const turn = new Turn('pug', card);

    turn.evaluateGuess(card);
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })

});
