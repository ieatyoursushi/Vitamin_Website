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
//jumbotron slideshow
const image1 = "'vitamineimage.PNG'";
const image2 = "'vitamins stock image 640x427.jpeg'";
const images = [image2, image1];
let slideDiv = document.getElementById("splitImage");
//for UI slide tracker
for(let i = 0 ; i < images.lenght; i++) {
    
}
//psuedo recursion
let i = 0;
function cycle() {
    slideDiv.style.background = "url(" + images[i] + ")";
    console.log(images[i]);
    i++;
    console.log(i)
    if(i === images.length) {
        i = 0;
    }
}
setInterval(cycle, 4000);