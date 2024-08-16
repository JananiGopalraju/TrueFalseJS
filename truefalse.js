let password = true;
let body = document.querySelector("body");

let button = document.querySelector("button");
button.addEventListener("click", function () {
  if (password === true) {
    password = false;
    body.style.backgroundColor = "red";
    console.log("password is wrong");
  } else {
    password = true;
    body.style.backgroundColor = "green";
    console.log("password is correct");
  }
  document.getElementById("result").innerText = password;
});