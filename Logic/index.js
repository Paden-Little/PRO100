//console.log("Hello world!")

const deckFactory = require("./Deck.js");

deck = deckFactory.initCards();



console.log(deck)
deck.shuffle()
console.log(deck)
console.log(deck.draw())
console.log(deck)