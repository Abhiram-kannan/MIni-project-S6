document.getElementById("roleSelectionForm").addEventListener("submit", function(event){
  event.preventDefault();
  var selectedRole = document.getElementById("role").value;

  // Redirect based on selected role
  if (selectedRole === "staff") {
      window.location.href = "staff-login.html";
  } else if (selectedRole === "client") {
      window.location.href = "client-login.html";
  }
});
