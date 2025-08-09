const username = document.getElementById("name");
const loginpassword = document.getElementById("loginpassword");

document.getElementById("loginForm").addEventListener("submit", function (e) {
     
    e.preventDefault(); 

    if (username.value !== "" && loginpassword.value !== "") {
        window.location.href = "dashboard.html";
    } else {
        alert("Please enter both username and password.");
    }
    });