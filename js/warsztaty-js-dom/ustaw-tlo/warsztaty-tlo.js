
let przycisk = document.querySelector("button");
let p1 = document.querySelector(".pierwszy");
let p2 = document.querySelector(".drugi");
let calaStrona = document.querySelector("body");


function ustawTlo(){
    p1.style.backgroundColor = "red";
    p2.style.backgroundColor = "yellow";
    calaStrona.style.backgroundColor = "blue";
}

przycisk.addEventListener("click", ustawTlo);