let btn1El = document.getElementById("btn1-el")
let btn2El = document.getElementById("btn2-el")
let paraEL = document.querySelector(".para")
let hoverEL = document.querySelector(".hover-el")
let passEl = document.querySelector("#pass")
let submitEl = document.querySelector(".subBtn")
let formEl = document.querySelector(".form-el")
let radiusEl = document.querySelector(".radius-el")
let rSubmitEl = document.querySelector(".submit-btn")

btn1El.addEventListener("click", function() {
    paraEL.textContent = "I'm Right"
})

btn2El.addEventListener("click", function() {
    paraEL.textContent = "No, I'm Right!"
})

hoverEL.addEventListener("mouseover", function() {
    alert("Hey, I told you not to hover over me!")
});


submitEl.addEventListener("click", function() {
    if (passEl.value === "12345678") {
        formEl.textContent = "Form Submitted";

    } else {
        alert("incorrect password!");
    }


});

rSubmitEl.addEventListener("click", function() {
    let rad = radiusEl.value;
    let volume = 4 / 3 * Math.PI * rad * rad * rad;
    document.querySelector('.result').textContent = "The volume of the sphere is " + volume;
})