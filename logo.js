const title = "Vitamin Co";
const colors = ["green", "brown", "#F8B229", "#EA4630", "#BB2528", "#146B3A", "#165B33", "#165B33"];
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
let logos = document.querySelectorAll(".logo");
function styleColor() {
    return colors[Math.round(Math.floor(Math.random() * colors.length-1))]
}
logos.forEach(function(logo) {
    logo.innerHTML = "";
    for(let i = 0; i < title.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = title.charAt(i);
        if(currentMonth == 11) {
            span.style.color = styleColor();
        } else {
            span.style.color = "brown";
        }
        span.classList.add("charColor");
        logo.appendChild(span);
    }
})
let charColors = document.querySelectorAll(".charColor");
if(currentMonth == 11) {
    for(let i = 0; i < charColors.length; i++) {
        setInterval( function changeColor() {
            charColors[i].style.color = styleColor();
        }, 300)
 
    }
}