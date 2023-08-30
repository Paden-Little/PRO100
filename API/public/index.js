const socket = io.connect('http://localhost:3000');
let roomCode;
let username;

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

    //Join the room based on info
    socket.emit('joinRoom', { username: username, roomCode: roomCode });

    //Drop the info screen
    const modal = document.querySelector('.modal');
    modal.classList.add('hide');
    modal.classList.remove('modal');
  });

  // Get the form element
const form = document.querySelector('form');

// Add an event listener to the form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the message input value
  const messageInput = document.getElementById('m');
  const message = messageInput.value;

  // Emit the message event via the socket connection
  socket.emit('message', roomCode, username + ": " + message);

  // Clear the message input
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

socket.on('gameStart', function(deck){
  
})

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
