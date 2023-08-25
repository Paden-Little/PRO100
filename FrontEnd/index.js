

function validateForm() {
  var name = document.forms["gameStartup"]["name"].value;
  var roomnumber = document.forms["gameStartup"]["roomnumber"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (roomnumber == "") {
    alert("Roomnumber must be filled out");
    return false;
  }
}
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
});


//the submit needs to simultaneously remove the login screen and 
//send in request to enter room
//connect cards to logic/json info to display as gameplay runs
//get cards and create assets for each one
//leaderboard is hardcoded till we can setup file i/o or database
