console.log("Hello world!")

const deckClass = require("./Deck.js")

let deckOfUnoCards = deckClass.getDeck

console.log(deckOfUnoCards)


player = 
{
    hand: card = []
}

player.hand = player.hand + deckOfUnoCards.draw()

console.log(player.hand)