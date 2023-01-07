let locationButton = document.getElementById("locabutton");
let shopButton = document.getElementById("shopbutton");
let webPages = document.querySelectorAll("[data-webPage]");
const url = "https://vitaminstoregithub.ieatyourshushi.repl.co/";
window.addEventListener("load", (event) => {
    //change this to a list of page id's (string)
    if(document.URL == url) {
        location.href = url + "#main";
    } else if (document.URL == url + "#rewards") {
        locationPage(5);
    } else if (document.URL == url + "#location")  {
        locationPage(2);
    } else if (document.URL == url + "#products") {
        locationPage(3);
    } else {
        location.href = url + "#main";
    }
});
function locationPage(index) {
    for(let i = 0; i < webPages.length; i++) {
        webPages[i].classList.add("invisible");
    }
    webPages[index].classList.remove("invisible");
}
locationButton.addEventListener('click', function() {
    locationPage(2);
    location.href = url + "#location"
});
shopButton.addEventListener('click', function() {
    locationPage(3);
    location.href = url + "#products";
});
let returnButton = document.getElementById("return");
returnButton.addEventListener('click', function() {
    locationPage(0);
    location.href = url + "#";
});
let rewards = document.querySelector("#rewardButton");
rewardButton.addEventListener('click', function() {
    locationPage(5);
    location.href = url + "#rewards";
});
let joinNow = document.getElementById("joinNow");
joinNow.addEventListener('click', function() {
    locationPage(6);
})
let inputExit = document.getElementById("inputExit");
inputExit.addEventListener('click', function() {
    locationPage(5);
})

//rewards nav 
let pointTabs = document.querySelectorAll(".pointsTab");
let rewardTabs = document.querySelectorAll(".rewardsTab");

for(let i = 0; i < rewardTabs.length; i++) {
    rewardTabs[i].classList.add("invisible");
}
for(let j = 0; j < pointTabs.length; j++) {
    pointTabs[j].addEventListener('click', function() {
        for(let i = 0; i < pointTabs.length; i++) {
            pointTabs[i].classList.remove("_border");
            rewardTabs[i].classList.remove("rewardsTab");
            rewardTabs[i].classList.add("invisible");
 
        }
        pointTabs[j].classList.add("_border");
        rewardTabs[j].classList.add("rewardsTab");
        rewardTabs[j].classList.remove("invisible");
    })
}
pointTabs[0].click();