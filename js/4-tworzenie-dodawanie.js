let istniejacyWezel = document.getElementById("parFirst");

let newParagraf = document.createElement("p");

newParagraf.appendChild(document.createTextNode("Teskst z JS"));

istniejacyWezel.appendChild(newParagraf);

//istniejacyWezel.removeChild(newParagraf);

newParagraf.setAttribute("class", "custom-class");

//newParagraf.removeAttribute("class");


console.log(newParagraf);


console.log(istniejacyWezel);

