// Uno Card
// private enum or string for color
// private number for the number
// Create deck initialize card array size is 108
// 1 zero 2 of each number and special colors -- 10 is skip -- 11 is reverse -- 12 is +2
// 4 of each wild card
// Draw method
// Shuffle method
// Google NODE JS K don't do plain JS or you'll screw everthing up 


var deck = [];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// function Shuffle(){
//     for(var count = 0; count < deck.length - 1; count++)
//     {
//         var wierd = count + getRandomInt(deck.length - count)
//         var card = deck[wierd]
//         deck[wierd] = deck[count]
//         deck[count] = card
//     }
// }




deck = 
{
    cards: deck,
    
    shuffle: function(cards)
    {
        for(var count = 0; count < cards.length - 1; count++)
        {
            var wierd = count + getRandomInt(cards.length - count)
            var card = cards[wierd]
            cards[wierd] = cards[count]
            cards[count] = card
        }
    },

    draw: function(cards)
    {
        var drawn = cards[0]
        cards = cards.shift()
        return drawn
    },

    initCards: function(cards)
    {
        var colors = ["grn", "red", "yel", "blu", "blk"];
        var numbers = ["0","1","2","3","4","5","6","7","8","9","s","r","t","w","f"];
        // Adds 1 of all color cards
        for(var colorCounter = 0; colorCounter  < 4; colorCounter++ )
        {
            for(var numCounter = 0; numCounter  < 13; numCounter++ )
            {
            cards.push(colors[colorCounter]+numbers[numCounter])
            }
        }
        // Adds second of all color cards except 0
        for(var colorCounter = 0; colorCounter  < 4; colorCounter++ )
        {
            for(var numCounter = 1; numCounter  < 13; numCounter++ )
            {
            cards.push(colors[colorCounter]+numbers[numCounter])
            }
        }
        // Adds wilds
        for(var count = 0; count < 4; count++)
        {
            for(var numCounter = 13; numCounter  < 15; numCounter++ )
            {
            cards.push(colors[4]+numbers[numCounter])
            }
        }
    }
}

module.exports.getDeck = () => {
    deck.initCards()
    return deck
}

