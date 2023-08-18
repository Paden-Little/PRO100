

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
