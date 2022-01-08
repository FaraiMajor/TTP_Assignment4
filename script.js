let btn1El = document.getElementById("btn1-el")
let btn2El = document.getElementById("btn2-el")
let paraEL = document.querySelector(".para")
let hoverEL = document.querySelector(".hover-el")
let passEl = document.querySelector("#pass")
let submitEl = document.querySelector(".subBtn")
let formEl = document.querySelector(".form-el")

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
        alert("incorrect");
    }


});