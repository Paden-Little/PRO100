//console.log("Hello world!")

const deckFactory = require("./Deck.js");

class Player {
    constructor() {
        this.hand = [];
        this.first = false;
    }
}

const john1 = new Player();
const kevin2 = new Player();

john1.first = true;

const deck = deckFactory.initCards();

const beginninghand = 7;

function setup() 
{
    deck = deckFactory.initCards();
    deck.shuffle();
    for (let index = 0; index < beginninghand; index++) {
        john1.hand.push(deck.draw());
        kevin2.hand.push(deck.draw());
    }
}

setup();

console.log("John1's hand:", john1.hand);
console.log("Kevin2's hand:", kevin2.hand);