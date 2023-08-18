//console.log("Hello world!")

const deckFactory = require("./Deck.js");
const beginninghand = 7;
var deck
var playPile = []
var firstPlayerTurn = true;

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
    if(!drawingCard(player))
    {
        setup()
        drawingCard(player)
    }

}



// Playcard method, takes in the player and the card that said player has tried to play
// Checks to see if card is playable, if yes remove card from player hand and put that
// card on top of the playpile
// Needs optimizing
function playCard(player, card)
{
    color = card.substring(0,3)
    topCard = playPile[0]
    if(card.substring(0,3) === "blk")
    {
        player.hand = player.hand.filter(item => item !== card)
        playPile.unshift(card)
        // color = // Function to let player choose a color
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
    checkEffect(player, card.substring(3), color)

    
}

// Effects start

function checkEffect(player, letter, color)
{
    switch(letter)
    {
        case "s":
            skip(player)
            break;
        case "r":
            reverse(player)
            break;
        case "t":
            plus(player, 2)
            break;
        case "w":
            wild(color)
            break;
        case "f":
            plus(player, 4)
            wild(color)
            break;
        default:
            changeTurn(player)
            break;
    }
}

function changeTurn(player)
{
    if(player.first)
    {
        firstPlayerTurn = false
    }
    else
    {
        firstPlayerTurn = true;
    }
}

function skip(player)
{
    if(player.first == true)
    {
        firstPlayerTurn = true
    }
    else
    {
        firstPlayerTurn = false;
    }
}

function reverse(player)
{
    skip(player)
}

function plus(player, amount)
{
    if(player.first == true)
    {
        drawMultipleCards(kevin2, amount)
    }
    else
    {
        drawMultipleCards(john1, amount)
    }
}

function drawMultipleCards(player, amount)
{
    for(let drawnAmount = 0; drawnAmount < amount; drawnAmount++ )
    {
        drawCard(player)
    }
}

function wild(color)
{
    playPile.unshift(color + "0")
}

john1.hand.push("redt")
playPile.unshift("red3")

playCard(john1, john1.hand[7])
console.log(firstPlayerTurn)