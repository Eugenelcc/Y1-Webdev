function validateLogin() {
  var adminID = document.getElementById("username").value;
  var adminPass = document.getElementById("password").value;

  if (adminID != "admin" || adminPass != "it1905") {
    alert("Incorrect ID or Password");
    return false
    }
  else {
    window.location = "FeedbackList.html"
  }
}
