function verified() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

 
  if (email === "rishimae@gmail.com" && password === "SHiki_KIsh*") {
      return true; 
  } else {
      if (email !== "rishimae@gmail.com") {
          document.getElementById("error_email").style.display = "block";
      }
      if (password !== "SHiki_KIsh*") {
          document.getElementById("error_pswrd").style.display = "block";
      }
      alert ("Email or password does not match. Please try again.")
      return false;
  }
}

function confirmrecipe(){
    var confirmMsg = "Are you sure you want to view the recipe?";
    if (confirm(confirmMsg)) {
      window.location.href = "https://www.allrecipes.com/recipe/168018/secret-burger-sauce/";
    }
}


