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

/*
deck.initCards(deck.cards)
deck.shuffle(deck.cards)
console.log(deck.cards)
console.log(deck.draw(deck.cards))
console.log(deck.cards)
*/

module.exports.initCards = (cards) => {
    var colors = ["grn", "red", "yel", "blu", "blk"];
    var numbers = ["0","1","2","3","4","5","6","7","8","9","s","r","t","w","f"];
    var cards = [];
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

    //shuffle function def
    shuffle = () => {
        for(var count = 0; count < cards.length - 1; count++)
        {
            var wierd = count + getRandomInt(cards.length - count)
            var card = cards[wierd]
            cards[wierd] = cards[count]
            cards[count] = card
        }
    }

    //draw function def
    draw = () => {
        var drawn = cards[0]
        cards.shift()
        return drawn
    }

    getCardImage = (cardString) => {
        switch(cardString){
            case "blkw": return "./cards\\blkw.png" //card name in format of "./cards\\blkw.png"
            case "blkf": return "./cards\\blkf.png"
            case "red0": return "./cards\\red0.png"
            case "red1": return "./cards\\red1.png"
            case "red2": return "./cards\\red2.png"
            case "red3": return "./cards\\red3.png"
            case "red4": return "./cards\\red4.png"
            case "red5": return "./cards\\red5.png"
            case "red6": return "./cards\\red6.png"
            case "red7": return "./cards\\red7.png"
            case "red8": return "./cards\\red8.png"
            case "red9": return "./cards\\red9.png"
            case "reds": return "./cards\\reds.png"
            case "redr": return "./cards\\redr.png"
            case "redt": return "./cards\\redt.png"
            case "blu0": return "./cards\\blu0.png"
            case "blu1": return "./cards\\blu1.png"
            case "blu2": return "./cards\\blu2.png"
            case "blu3": return "./cards\\blu3.png"
            case "blu4": return "./cards\\blu4.png"
            case "blu5": return "./cards\\blu5.png"
            case "blu6": return "./cards\\blu6.png"
            case "blu7": return "./cards\\blu7.png"
            case "blu8": return "./cards\\blu8.png"
            case "blu9": return "./cards\\blu9.png"
            case "blus": return "./cards\\blus.png"
            case "blur": return "./cards\\blur.png"
            case "blut": return "./cards\\blut.png"
            case "grn0": return "./cards\\grn0.png"
            case "grn1": return "./cards\\grn1.png"
            case "grn2": return "./cards\\grn2.png"
            case "grn3": return "./cards\\grn3.png"
            case "grn4": return "./cards\\grn4.png"
            case "grn5": return "./cards\\grn5.png"
            case "grn6": return "./cards\\grn6.png"
            case "grn7": return "./cards\\grn7.png"
            case "grn8": return "./cards\\grn8.png"
            case "grn9": return "./cards\\grn9.png"
            case "grns": return "./cards\\grns.png"
            case "grnr": return "./cards\\grnr.png"
            case "grnt": return "./cards\\grnt.png"
            case "yel0": return "./cards\\yel0.png"
            case "yel1": return "./cards\\yel1.png"
            case "yel2": return "./cards\\yel2.png"
            case "yel3": return "./cards\\yel3.png"
            case "yel4": return "./cards\\yel4.png"
            case "yel5": return "./cards\\yel5.png"
            case "yel6": return "./cards\\yel6.png"
            case "yel7": return "./cards\\yel7.png"
            case "yel8": return "./cards\\yel8.png"
            case "yel9": return "./cards\\yel9.png"
            case "yels": return "./cards\\yels.png"
            case "yelr": return "./cards\\yelr.png"
            case "yelt": return "./cards\\yelt.png"
        }
    }

    return {shuffle, draw, cards};
}


