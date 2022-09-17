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
const images = [image2, image1, 'https://img.freepik.com/free-vector/vitamin-food-infographic_23-2148485173.jpg?w=360','https://images.theconversation.com/files/156949/original/image-20170215-19241-1ynym4v.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'];
let slideDiv = document.getElementById("splitImage");
//for UI slide tracker, flexible with slides or images array length
for(let i = 0 ; i < images.length; i++) {
    let circle = document.createElement('div');
    circle.style.borderRadius = "100%";
    circle.style.width = "10px";
    circle.style.height = "10px"
    circle.style.background = "grey";
    circle.classList.add("circle");
    circle.setAttribute("id", i);
    let slides = document.querySelector(".slides");
    slides.append(circle);
}
let circles = document.querySelectorAll(".circle");
function grey() {
    for (let i = 0; i < images.length; i++) {
        circles[i].style.background = "grey";
    }
}
let i = 0;
function defaultState() {
    circles.forEach(circle => {
        circle.style.background = "grey";
        circle.addEventListener('click', () => {
            i = circle.id;
            slideDiv.style.background = "url(" + images[circle.id] + ")";
            grey();
            circles[circle.id].style.background = "white";
            
        })
    })
}
//psuedo recursion
 
function cycle() {
    defaultState();
    slideDiv.style.background = "url(" + images[i] + ")";
    console.log(images[i]);
    circles[i].style.background = "white";
    i++;
    console.log(i)
    if(i === images.length) {
        i = 0;
    }
}
setInterval(cycle, 4000);