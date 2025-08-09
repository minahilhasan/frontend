const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
const message = document.getElementById("message");
  
  confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
      message.textContent = "Passwords do not match";
      message.style.color = "red";
    } else {
      message.textContent = "Passwords match";
      message.style.color = "green";
    }
  });

    document.querySelector("form.register").addEventListener("submit", function (e) {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match.");
      message.textContent = "";
      return;
    }

    alert("You have been registered. Kindly login to proceed to your dashboard.");
    this.reset();
  });