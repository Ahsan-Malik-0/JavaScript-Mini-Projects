let dec = document.querySelector("#dec");
let res = document.querySelector("#res");
let inc = document.querySelector("#inc");
let count = document.querySelector("#count");

let c = 0;

count.innerHTML = c;

dec.addEventListener("click", function(){
    c -= 1;
    count.innerHTML = c;
})

inc.addEventListener("click", function(){
    c += 1;
    count.innerHTML = c;
})

res.addEventListener("click", function(){
    c = 0
    count.innerHTML = c;
})