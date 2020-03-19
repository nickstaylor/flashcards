const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');


describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a new deck in the Round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
    // expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should return current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    let currentCard = round.returnCurrentCard();
    // console.log(round.returnCurrentCard());
    expect(currentCard).to.equal(card1);
  });

    it('should update the turn count every time a guess is made', function(){
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      // let currentCard = round.returnCurrentCard();
      round.returnCurrentCard();
      round.takeTurn('pug')
      const turn1 = new Turn( 'pug', card1);
      // console.log(currentCard);
      expect(round.turns).to.equal(1);

      round.returnCurrentCard();
      round.takeTurn('lung')
      const turn2 = new Turn('lung', card2);
      expect(round.turns).to.equal(2);
    })

    it('should evaluate if a guess is incorrect', function(){
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.returnCurrentCard();
      round.takeTurn('pug')
      const turn1 = new Turn( 'pug', card1);
      expect(turn1.evaluateGuess()).to.equal(false);
      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses.length).to.equal(1);

      round.returnCurrentCard();
      round.takeTurn('lung')
      const turn2 = new Turn('lung', card2);
      expect(round.turns).to.equal(2);
      expect(turn2.evaluateGuess()).to.equal(false);
      expect(round.incorrectGuesses).to.deep.equal([1, 14]);

    })

    it('should evaluate if a guess is correct', function(){
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.returnCurrentCard();
      round.takeTurn('sea otter')
      const turn1 = new Turn( 'sea otter', card1);
      expect(turn1.evaluateGuess()).to.equal(true);
      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses.length).to.equal(0);

      round.returnCurrentCard();
      round.takeTurn('gallbladder')
      const turn2 = new Turn('gallbladder', card2);
      expect(round.turns).to.equal(2);
      expect(turn2.evaluateGuess()).to.equal(true);
      expect(round.incorrectGuesses).to.deep.equal([]);

    })

    it('should store the id of an incorrect guess', function(){
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.returnCurrentCard();
      round.takeTurn('pug')
      const turn1 = new Turn( 'pug', card1);
      expect(turn1.evaluateGuess()).to.equal(false);
      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses.length).to.equal(1);

      round.returnCurrentCard();
      round.takeTurn('lung')
      const turn2 = new Turn('lung', card2);
      expect(round.turns).to.equal(2);
      expect(turn2.evaluateGuess()).to.equal(false);
      expect(round.incorrectGuesses).to.deep.equal([1, 14]);

      round.returnCurrentCard();
      round.takeTurn('Fitzgerald')
      const turn3 = new Turn('Fitzgerald', card3);
      expect(round.turns).to.equal(3);
      expect(turn3.evaluateGuess()).to.equal(true);
      expect(round.incorrectGuesses).to.deep.equal([1, 14]);

    })

    it('should provide feedback on the guess', function(){
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.returnCurrentCard();
      round.takeTurn('pug')
      const turn1 = new Turn( 'pug', card1);
      expect(turn1.evaluateGuess()).to.equal(false);
      expect(turn1.giveFeedback()).to.equal('incorrect!');

      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses.length).to.equal(1);

      round.returnCurrentCard();
      round.takeTurn('lung')
      const turn2 = new Turn('lung', card2);
      expect(round.turns).to.equal(2);
      expect(turn2.evaluateGuess()).to.equal(false);
      expect(turn2.giveFeedback()).to.equal('incorrect!');

      expect(round.incorrectGuesses).to.deep.equal([1, 14]);

      round.returnCurrentCard();
      round.takeTurn('Fitzgerald')
      const turn3 = new Turn('Fitzgerald', card3);
      expect(turn3.giveFeedback()).to.equal('correct!');
      expect(round.turns).to.equal(3);
      expect(turn3.evaluateGuess()).to.equal(true);
      expect(round.incorrectGuesses).to.deep.equal([1, 14]);

    })

    it('should calculate the percent of answers correct', function(){
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);

      round.returnCurrentCard();
      round.takeTurn('pug')
      const turn1 = new Turn( 'pug', card1);
      expect(turn1.evaluateGuess()).to.equal(false);
      expect(turn1.giveFeedback()).to.equal('incorrect!');

      expect(round.turns).to.equal(1);
      expect(round.incorrectGuesses.length).to.equal(1);

      round.returnCurrentCard();
      round.takeTurn('lung')
      const turn2 = new Turn('lung', card2);
      expect(round.turns).to.equal(2);
      expect(turn2.evaluateGuess()).to.equal(false);
      expect(turn2.giveFeedback()).to.equal('incorrect!');

      expect(round.incorrectGuesses).to.deep.equal([1, 14]);

      round.returnCurrentCard();
      round.takeTurn('Fitzgerald')
      const turn3 = new Turn('Fitzgerald', card3);
      expect(turn3.giveFeedback()).to.equal('correct!');
      expect(round.turns).to.equal(3);
      expect(turn3.evaluateGuess()).to.equal(true);
      expect(round.incorrectGuesses).to.deep.equal([1, 14]);

      round.calculatePercentCorrect()
      expect(round.calculatePercentCorrect()).to.equal('You got 33.33333333333333% correct!');

    })

});
