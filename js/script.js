const handleSubmitBtn = document
  .getElementById("handle-submit-btn")
  .addEventListener("click", function () {
    //get user email
    const emailField = document.getElementById("user-email");
    const userEmailValue = emailField.value;
    const passwordField = document.getElementById("user-password");
    //get user password
    const userPasswordValue = passwordField.value;
    //check user email
    if (userEmailValue && userPasswordValue) {
      window.location.href = "banking.html";
    } else {
      document.getElementById("error-message").innerHTML =
        "please enter your  email and password";
    }
  });
