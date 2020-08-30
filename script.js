//Adds link to google.com to each element that should have one.

const linksArr = Array.from(document.querySelectorAll("a"));
const navItemsArr = Array.from(document.querySelectorAll(".navItem"));

const totalArr = [].concat(linksArr.concat(navItemsArr)));

for(const element of totalArr){
    element.style.cursor = "pointer";
    element.onclick = () => window.location = "https://google.com";
}