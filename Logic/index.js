//console.log("Hello world!")

const deckFactory = require("./Deck.js");
const beginninghand = 7;
var deck
var playPile = []

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
    playPile.unshift(deck.draw())
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
function drawingCard(player)
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
function drawCard(player)
{
    if(!drawCard(player))
    {
        setup()
        drawCard(player)
    }

}



// Playcard method, takes in the player and the card that said player has tried to play
// Checks to see if card is playable, if yes remove card from player hand and put that
// card on top of the playpile
// Needs optimizing
function playCard(player, card)
{
    topCard = playPile[0]
    if(card.substring(0,3) === "blk")
    {
        player.hand = player.hand.filter(item => item !== card)
        // Check for effects of card
        playPile.unshift(card)
    }
    else if(card.substring(0,3) === topCard.substring(0,3))
    {
        player.hand = player.hand.filter(item => item !== card)
        // Check for effects of card
        playPile.unshift(card)
    }
    else if(card.substring(3) === topCard.substring(3))
    {
        player.hand = player.hand.filter(item => item !== card)
        // Check for effects of card
        playPile.unshift(card)
    }
    else
    {
        return false
    }
}

john1.hand.push("grn3")
playPile.unshift("blu3")
playCard(john1, john1.hand[7])
console.log(john1.hand)

