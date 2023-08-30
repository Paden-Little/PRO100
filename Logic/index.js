//console.log("Hello world!")

const deckFactory = require("./Deck.js");


class Player {
    constructor() {
        this.hand = [];
        this.first = false;
    }
}


class Game{
    beginninghand = 7;
    deck;
    playPile = []
    firstPlayerTurn = true;

    //Constructor
    constructor(players) {
        this.deck = {};
        this.setup();
        this.players = players;
        this.players.forEach(element => {
            this.drawMultipleCards(element, 7)
        });
        this.currentPlayerIndex = 0;
    }
    
    // Set up method, initializes deck and shuffles it
    setup() 
    {
        this.deck = deckFactory.initCards();
        this.deck.shuffle();
        this.playPile.unshift(this.deck.draw())
    }

    // drawCard method, takes in a player and gives them a card, if the deck is empty as in it returns a null when we draw from it 
    // it will return false helping us know when it is empty
    drawingCard(player)
    {
        let card = this.deck.draw()
    
        if(card == null)
        {
            return false
        }
        player.hand.push(card)
        return true
    }

    // This will check if deck is empty if so it will create a new deck and give the player a card from the new deck
    drawCard(player)
    {
        if(!this.drawingCard(player))
        {
            setup()
            drawingCard(player)
        }

    }

    // Playcard method, takes in the player and the card that said player has tried to play
    // Checks to see if card is playable, if yes remove card from player hand and put that
    // card on top of the playpile
    // Needs optimizing
    playCard(player, card)
    {
        if(player.first)
        {
            if(!this.firstPlayerTurn)
            {
                return null
            }
        }
        else
        {
            if(this.firstPlayerTurn)
            {
                return null
            }
        }
        
        let color = card.substring(0,3)
        let topCard = this.playPile[0]
        if(card.substring(0,3) === "blk")
        {
            player.hand = player.hand.filter(item => item !== card)
            this.playPile.unshift(card)
            // color = // Function to let player choose a color
        }
        else if(card.substring(0,3) === topCard.substring(0,3))
        {
            player.hand = player.hand.filter(item => item !== card)
            // Check for effects of card
            this.playPile.unshift(card)
        }
        else if(card.substring(3) === topCard.substring(3))
        {
            player.hand = player.hand.filter(item => item !== card)
            // Check for effects of card
            this.playPile.unshift(card)
        }
        this.checkEffect(player, card.substring(3), color)

        
    }

    // Effects start
    checkEffect(player, letter, color)
    {
        switch(letter)
        {
            case "s":
                this.skip(player)
                break;
            case "r":
                this.reverse(player)
                break;
            case "t":
                this.plus(player, 2)
                break;
            case "w":
                this.wild(color)
                break;
            case "f":
                this.plus(player, 4)
                this.wild(color)
                break;
            default:
                this.changeTurn(player)
                break;
        }
    }

    changeTurn(player)
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

    skip(player)
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

    reverse(player)
    {
        skip(player)
    }

    plus(player, amount)
    {
        if(player.first == true)
        {
            this.drawMultipleCards(kevin2, amount)
        }
        else
        {
            this.drawMultipleCards(john1, amount)
        }
    }

    drawMultipleCards(player, amount)
    {
        for(let drawnAmount = 0; drawnAmount < amount; drawnAmount++ )
        {
            this.drawCard(player)
        }
    }

    wild(color)
    {
        playPile.unshift(color + "0")
    }
}

const john1 = new Player();
const kevin2 = new Player();
const game = new Game([john1, kevin2]);

john1.first = true;



john1.hand.push("redt")
game.playPile.unshift("red3")

game.playCard(john1, john1.hand[7])
console.log(game.firstPlayerTurn)