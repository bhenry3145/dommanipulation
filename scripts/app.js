let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2");
let btnChange3 = document.getElementById("btnChange3");
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5");
let btnChange6 = document.getElementById("btnChange6");
let btnChange7 = document.getElementById("btnChange7");
let btnChange8 = document.getElementById("btnChange8");
let btnChange9 = document.getElementById("btnChange9");
let btnChange10 = document.getElementById("btnChange10");

let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2");
let affectMe3 = document.getElementById("affectMe3");
let affectMe4 = document.getElementById("affectMe4");
let affectMe5 = document.getElementById("affectMe5");
let affectMe6 = document.getElementById("affectMe6");
let affectMe7 = document.getElementById("affectMe7");
let affectMe8 = document.getElementById("affectMe8");
let affectMe9 = document.getElementById("affectMe9");
let affectMe10 = document.getElementById("affectMe10");

btnChange1.addEventListener("click", function(event){
    affectMe1.innerText = "You changed me.";
});

btnChange2.addEventListener("click", function(event){
    affectMe2.innerText = "I'm different";
    affectMe2.className = "pulse";
})

btnChange3.addEventListener("click", function(event){
    affectMe3.innerText = "I'm here now";
    affectMe3.className = "fadeIn";
})

btnChange4.addEventListener("click", function(event){
    affectMe4.innerText = "Keep rolling";
    affectMe4.className = "newLook " + "barrelRoll";
})

btnChange5.addEventListener("click", function(event){
    affectMe5.innerText = "Oh no, I'm shaking ahhh";
    affectMe5.className = "shake";
})

btnChange6.addEventListener("click", function(event){
    affectMe6.innerText = "I'm spinning now";
    affectMe6.className = "spinner";
})

btnChange7.addEventListener("click", function(event){
    affectMe7.innerText = "You got me floatin'";
    affectMe7.className = "floater";
})

btnChange8.addEventListener("click", function(event){
    affectMe8.innerText = "Wiggle wiggle wiggle";
    affectMe8.className = "wiggle";
})

btnChange9.addEventListener("click", function(event){
    affectMe9.innerText = "Slide to the left";
    affectMe9.className = "slideLeft";
})

btnChange10.addEventListener("click", function(event){
    affectMe10.innerText = "Slide to the right";
    affectMe10.className = "slideRight";
})