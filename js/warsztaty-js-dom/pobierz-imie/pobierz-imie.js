let form = document.querySelector("#formularz");
let fname = document.querySelector("input[name=fname]");
let lname = document.querySelector("input[name=lname]");
let submit = document.querySelector("input[type=submit]");

let valueFname = fname.value;
let valueLname = lname.value;


submit.addEventListener("click", function(){
    console.log(valueFname);
    console.log(valueLname);
});


function block(defaultEvent){
    defaultEvent.preventDefault();
}

form.addEventListener("submit", block);

