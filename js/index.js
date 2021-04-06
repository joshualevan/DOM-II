// Your code goes here
//Elements
const links = Array.from(document.links);
const bus = document.querySelector(".intro img");

//mouse over
const changeColor = e => e.target.style.color = "red";
const colorBack = e => e.target.style.color = "black";

links.forEach(link => link.addEventListener('mouseover', changeColor))
links.forEach(link => link.addEventListener('mouseleave', colorBack))

//keydown
const enterKey = e => {
    if(e.key === "Enter"){
        bus.style.border = "3px solid red";
    } 
}

document.addEventListener('keydown', enterKey);

//load

//focus

//resize

//scroll

//select

//dblclick

// drag/ drop