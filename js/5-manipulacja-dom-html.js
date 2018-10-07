let tablicaParagrafow = document.querySelectorAll("#parSecond p");

tablicaParagrafow.forEach(function(element, index){
    element.setAttribute("class", "pierwsza-klasa");
//    element.style.color = "red";
//    element.innerHTML = "Nowy tekst"; //tylko dodaaje tekst
//    element.outerHTML = "<a href='#'>Teraz link</a><br>" //daje tekst i znaczniki
    console.log(element.innerHTML)
    
});


let allLinks = document.getElementsByClassName("link");

allLinks[1].href = "https://www.google.pl/";

allLinks[1].className = "google-link" // zamienia nazwe klasy

allLinks[1].classList.add("fa");

console.log(allLinks[1].classList);

console.log(allLinks);

//console.log(tablicaParagrafow);