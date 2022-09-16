let splitBox = document.querySelector(".splitBox");
splitBox.children[2].children[0].style.background = "#006AF6";
splitBox.children[2].children[1].style.color = "black";
let webMain = document.querySelector(".webMain");
let login = document.querySelector(".login");
function toggleDisplay() {
    webMain.classList.toggle("invisible");
    login.classList.toggle("invisible");
}
//login division
let submit = document.querySelector(".submit");
submit.addEventListener('click', toggleDisplay);
let username = document.querySelector(".un");
function displayUsername() {
    let usernam = document.querySelector(".username");
    usernam.innerHTML = username.value;
    usernam.classList.remove("invisible");
    let logButton = document.getElementById("logButton");
    logButton.innerHTML = "Sign Out";
}
username.addEventListener('change', displayUsername);