

function validateForm() {
  var name = document.forms["gameStartup"]["name"].value;
  var roomnumber = document.forms["gameStartup"]["roomnumber"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (roomnumber == "") {
    alert("Email must be filled out");
    return false;
  }
}


//the submit needs to simultaneously remove the login screen and 
//send in request to enter room
//connect cards to logic/json info to display as gameplay runs
//get cards and create assets for each one
//leaderboard is hardcoded till we can setup file i/o or database
