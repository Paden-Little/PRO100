//console.log("Hello world!")

const deckFactory = require("./Deck.js");
const beginninghand = 7;
var deck

class Player {
    constructor() {
        this.hand = [];
        this.first = false;
    }
}

const john1 = new Player();
const kevin2 = new Player();

john1.first = true;


// Set up method, initializes deck and shuffles it
function setup() 
{
    deck = deckFactory.initCards();
    deck.shuffle();
}
// Gives the players their starting cards
function giveStartCards()
{
    for (let index = 0; index < beginninghand; index++) {
        john1.hand.push(deck.draw());
        kevin2.hand.push(deck.draw());
    }
}

setup();
giveStartCards()


// drawCard method, takes in a player and gives them a card, if the deck is empty as in it returns a null when we draw from it 
// it will return false helping us know when it is empty
function drawCard(player)
{
    card = deck.draw()
   
    if(card == null)
    {
        return false
    }
    player.hand.push(card)
    return true
}
// This will check if deck is empty if so it will create a new deck and give the player a card from the new deck
if(!drawCard(kevin2))
{
    setup()
    drawCard(kevin2)
}

console.log("Kevin2's hand:", kevin2.hand);
