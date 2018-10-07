//let pierwszyDiv = document.getElementById("parFirst").parentNode; //najblizszy wezel


let pierwszyDiv = document.getElementById("parFirst").parentElement; //najblizszy element

console.log(pierwszyDiv);

//let header = document.getElementsByTagName("header")[0].childNodes; //wszystko co sie zznajduje razem z biaalymi znakami

//let header = document.getElementsByTagName("header")[0].children; //dzieci

let linki =document.querySelectorAll("#sectionFirst .link")[1];


console.log(linki.previousElementSibling);
