const { emit } = require("nodemon");

const socket = io.connect('http://localhost:3000');
let roomCode;
let username;
let clientDeck;

let currentPlayCard;

let hand = [];

function validateForm(name, roomNumber) {
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (roomNumber == "") {
    alert("Roomnumber must be filled out");
    return false;
  }

  return true;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

draw = (cards) => {
  var drawn = cards[0]
  cards.shift()
  return drawn
}

shuffle = (cards) => {
  for(var count = 0; count < cards.length - 1; count++)
  {
      var wierd = count + getRandomInt(cards.length - count)
      var card = cards[wierd]
      cards[wierd] = cards[count]
      cards[count] = card
  }
}

function renderPlayPile(card) {
  let div = document.querySelector('.playedCards');
  div.innerHTML = '';
  let image = document.createElement('img');
  image.src = './cards/' + card + '.png';
  div.prepend(image);
  currentPlayCard = card;
}

function renderHand(hand) {
  let div = document.querySelector('.scroll-container');
  div.innerHTML = '';
  if(hand.length != 0){
    for (let card of hand) {
      let image = document.createElement('img');
      image.src = './cards/' + card + '.png';
      image.id = card
      image.addEventListener('click', function() {
        playCard(image.id);
        image.remove();
        
      });
      div.appendChild(image);
    }
  }else{
      socket.emit('message', roomCode, username + " wins!")
  }
}


function displayMessage(msg){
  var messages = document.getElementById('messages');
  var li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
}

document.getElementById('drawPile').addEventListener('click', function() {
    hand.push(draw(clientDeck));
    renderHand(hand)
});

function playCard(playedCard) {
  if(currentPlayCard.substring(0, 2) == playedCard.substring(0, 2) || currentPlayCard.substring(3) == playedCard.substring(3)){
    if(playedCard.substring(3) == "s" || playedCard.substring(3) == "r"){
      socket.emit('message', roomCode, "You have been skipped!")
    }else if(playedCard.substring(3) == "t"){
      socket.emit('message', roomCode, "Draw two cards")
    }
    console.log("Play card in index.js / public " + roomCode + username + playedCard)
    socket.emit('playCard', roomCode, username, playedCard);
  }else if (playedCard == "blkw" || playedCard == "blkf"){
    displayMessage("Please choose a color: blue, green, yellow, red");
    if(playedCard == "blkf"){
      socket.emit('message', roomCode, "Draw four cards")
    }
    socket.emit('playCard', roomCode, username, playedCard);
  }else{
    displayMessage("Not a valid move");
    renderHand(hand);
  }
}



document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('gameStartup').addEventListener('submit', function(e){
    e.preventDefault();
        
    const insideusername = document.getElementById('name').value;
    const insideroomCode = document.getElementById('roomNumber').value;
  
    if(!validateForm(insideusername, insideroomCode)){
      return;
    }
  
    roomCode = insideroomCode;
    username = insideusername;

    socket.emit('joinRoom', { username: username, roomCode: roomCode });

    const modal = document.querySelector('.modal');
    modal.classList.add('hide');
    modal.classList.remove('modal');
  });

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const messageInput = document.getElementById('m');
  const message = messageInput.value;

  socket.emit('message', roomCode, username + ": " + message);

  messageInput.value = '';

  return false;
});

socket.on('message', function(msg) {
  var messages = document.getElementById('messages');
  var li = document.createElement('li');
  li.classList.add('playerOne')
  li.textContent = msg;
  messages.appendChild(li);
});

socket.on('gameSetup', function(startingCard, deck){
  console.log(deck)
  clientDeck = deck;
  renderPlayPile(startingCard)
  shuffle(deck);
  for(i = 0; i < 7; i++){
    hand.push(draw(deck));
  }
  renderHand(hand);
  
  console.log(deck)
})

socket.on('replaceTopCard', (serverUsername, playedCard) =>  {
  console.log("Received Play card in index.js / public" + serverUsername + playedCard)
  renderPlayPile(playedCard);
  if (username === serverUsername) {
    let removedCard = hand.splice(hand.indexOf(playedCard), 1)
    console.log(removedCard)
    renderHand(hand);
  }
});

});


/* Scroll not currently functional
const scrollContainer = document.querySelector('.scroll-container');
let isScrolling = false;

scrollContainer.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      isScrolling = true;
      // Your scrolling logic here
      isScrolling = false;
    });
  }
});
*/


/*
const radioForm = document.getElementById('spinnerForm');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const chooseColorButton = document.querySelector('button[type="submit"]');

//this will take in the color choice and make the 'spinner' display none
//after submition


radioForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  let selectedValue = null;

  //this will take in the color value
  radioInputs.forEach(input => {
    if (input.checked) {
      selectedValue = input.value;
    }
  });

  if (selectedValue !== null) {
    // Game logic to chose new color
    console.log('Selected value:', selectedValue);
    radioForm.style.display = 'none';

  } else {
    console.log('No option selected');
  }
});*/


//the submit needs to simultaneously remove the login screen and 
//send in request to enter room
//connect cards to logic/json info to display as gameplay runs
//get cards and create assets for each one
//leaderboard is hardcoded till we can setup file i/o or database
