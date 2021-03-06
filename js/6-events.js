// add events by HTML DOM
let naszH2 = document.querySelector("#sectionFirst > h2");

function pokazNaClicku() {
    console.log(naszH2.innerHTML);
}

naszH2.onclick = pokazNaClicku;



// add events by addEventListener()

let mainHeader = document.querySelector("#main-header");


function mouseOverEvent() {
    mainHeader.style.color = "blue";

}

mainHeader.addEventListener("mouseover", mouseOverEvent); //dodanie eventu

function mouseOutEvent() {
    mainHeader.style.color = "green";

}

mainHeader.addEventListener("mouseout", mouseOutEvent); //dodanie eventu

mainHeader.removeEventListener("mouseover", mouseOverEvent); //usuniecie eventu

mainHeader.removeEventListener("mouseout", mouseOutEvent); //usuniecie eventu


console.log(mainHeader);

let superLink = document.getElementById("super-link");

function zablokuj(domyslneZachowanie) {
    domyslneZachowanie.preventDefault();
    console.log("click");
}

superLink.onclick = zablokuj;


// stopPropagation
function clickHeader() {
    console.log("Kliknięto w <header>");

}

function clickH1(domyslneZachowanie) {
    domyslneZachowanie.stopPropagation(); //blokuje eventy rodzica na dziecku (zzatrzymuje bąbelkowanie /bubling)
    console.log("Kliknięto w <h1>");

}

document.querySelector("header").onclick = clickHeader;

document.querySelector("#main-header").onclick = clickH1;

