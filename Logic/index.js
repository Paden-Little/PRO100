//console.log("Hello world!")

const deckFactory = require("./Deck.js");

const beginninghand = 7

player =
{
    hand: cards = [],
    first: false
}

// console.log(deck)
// deck.shuffle()
// console.log(deck)
// console.log(deck.draw())
// console.log(deck)

// player.hand = player.hand + deck.draw()
// player.hand = player.hand + deck.draw()
// console.log(player.hand)

john1 = player
kevin2 = player

john1.first = true

function setup()
{
    deck = deckFactory.initCards();
    deck.shuffle()
    for (let index = 0; index < beginninghand; index++) {
        john1.hand += deck.draw()
        kevin2.hand += deck.draw()
    }
}

setup()

console.log(john1.hand[0])
console.log(kevin2.hand)
console.log(john1)