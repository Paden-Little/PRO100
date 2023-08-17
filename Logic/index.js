//console.log("Hello world!")

const deckFactory = require("./Deck.js");
deck = deckFactory.initCards();

const beginninghand = 7

player =
{
    hand: cards = [],
    first: false
}


const john1 = Object.assign({}, player);
const kevin2 = Object.assign({}, player);

john1.first = true

function setup()
{
    
    deck.shuffle()
    for (let index = 0; index < beginninghand; index++) {
        john1.hand.push(deck.draw())
        kevin2.hand.push(deck.draw())
    }
}

setup()

console.log(john1.hand)
console.log(kevin2.hand)
console.log(john1)