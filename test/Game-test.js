const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const testQuestions = [prototypeQuestions[0], prototypeQuestions[1], prototypeQuestions[2]];

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start a game with all correct instantiations', function() {
    const game = new Game();
    game.start(prototypeQuestions);
    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    expect(game.currentRound.deck.cards.length).to.equal(30);
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });

});
