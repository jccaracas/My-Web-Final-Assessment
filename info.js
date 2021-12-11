function error_validation() {
    var thisform = document.querySelector("form");
    var pword1 = thisform.querySelector("#password1").value;
    var pword2 = thisform.querySelector("#password2").value;
    var sidepanel = document.querySelector("aside");
    var sbutton = thisform.querySelector("#submit");
  
    var uname = thisform.querySelector("#username").value;
  
    sidepanel.innerHTML = " ";
  
    var validation = true;
  
    if (pword1.length < 6) {
      validation = false;

      var nameMessageRules="<h5><mark>Error Message</mark></h5>";
      showErrors(nameMessageRules);

      var error_msg = document.createTextNode(
        "Password must be at least 6 characters long!"
      );
      var error_par = document.createElement("h5");
      sidepanel.appendChild(error_par).appendChild(error_msg);
    }
  
    if (!pword1.match(/^[A-Za-z]/)) {
      validation = false;
      var nameMessageRules="<h5><mark>Error Message</mark></h5>";
      showErrors(nameMessageRules);

      var error_msg = document.createTextNode(
        "Password must start with a alphabet!"
      );
      var error_par = document.createElement("h5");
      sidepanel.appendChild(error_par).appendChild(error_msg);
    } else if (!pword1.match(/\d/)) {
      validation = false;
      var nameMessageRules="<h5><mark>Error Message</mark></h5>";
      showErrors(nameMessageRules);

      var error_msg = document.createTextNode(
        "Password must have at least one digit!"
      );
      var error_par = document.createElement("h5");
      sidepanel.appendChild(error_par).appendChild(error_msg);
    } else if (!pword1.match(/[A-Z]/)) {
      validation = false;
      var nameMessageRules="<h5><mark>Error Message</mark></h5>";
      showErrors(nameMessageRules);

      var error_msg = document.createTextNode(
        "Password must have at least one uppercase!"
      );
      var error_par = document.createElement("h5");
      sidepanel.appendChild(error_par).appendChild(error_msg);
    }
  
    if (pword1 != pword2) {
      validation = false;
      var nameMessageRules="<h5><mark>Error Message</mark></h5>";
      showErrors(nameMessageRules);

      var error_msg = document.createTextNode("Passwords must match!");
      var error_par = document.createElement("h5");
      sidepanel.appendChild(error_par).appendChild(error_msg);
    }
  
    if (uname.length < 6) {
      validation = false;
      var nameMessageRules="<h5><mark>Error Message</mark></h5>";
      showErrors(nameMessageRules);

      var error_msg = document.createTextNode("Username must have at least 6 characters!");
      var error_par = document.createElement("h5");
      sidepanel.appendChild(error_par).appendChild(error_msg);
    } 
    
    if (!uname.match(/^[A-Za-z]/)) {
      validation = false;
      var nameMessageRules="<h5><mark>Error Message</mark></h5>";
      showErrors(nameMessageRules);

      var error_msg = document.createTextNode(
        "Username must start with an alphabet!"
      );
      var error_par = document.createElement("h5");
      sidepanel.appendChild(error_par).appendChild(error_msg);
    }
  
    if (validation) {
      alert("Welcome!");
      var message_text = document.createTextNode("Submitted!");
      var message_par = document.createElement("h3");
      sidepanel.appendChild(message_par).appendChild(message_text);
    }
  
    
    return validation;
  }
  
function clearErrors() {

  document.querySelector('aside').innerHTML = "";
}

function showErrors(messages) {
      
    document.querySelector('aside').innerHTML += messages;

 } 