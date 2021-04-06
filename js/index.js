// Your code goes here
//Elements
const links = Array.from(document.links);
const bus = document.querySelector(".intro img");
const form = document.querySelector("form");
const nav = document.querySelector("header");

//mouse over
const changeColor = e => e.target.style.color = "red";
const colorBack = e => e.target.style.color = "black";

links.forEach(link => link.addEventListener('mouseover', changeColor))
//mouse leave
links.forEach(link => link.addEventListener('mouseleave', colorBack))

//keydown
const enterKey = e => {
    if(e.key === "Enter"){
        if(bus.style.border === "3px solid red"){
            bus.style.border = "none";
        } else{
            bus.style.border = "3px solid red";
        }
    } 
}

document.addEventListener('keydown', enterKey);

//load
window.onload = () => alert("This Page has loaded");

//focus
const backgroundYellow = (e) => {
    e.target.style.background = "yellow";
}
const backgroundWhite = (e) => {
    e.target.style.background = "white";
}

form.addEventListener('focus', backgroundYellow, true);
//blur
form.addEventListener('blur', backgroundWhite, true);

//resize
const windowSize = (e) => {
    console.log(`browser height: ${window.innerHeight}px browser width: ${window.innerWidth}px`)
}

window.addEventListener('resize', windowSize);

//scroll

//select

//dblclick
const changeBackgroundPink = e => {
    if (e.target.style.backgroundColor === "pink"){
        e.target.style.backgroundColor = "white";
    } else {
        e.target.style.backgroundColor = "pink";
    }
}

nav.addEventListener('dblclick', changeBackgroundPink)
