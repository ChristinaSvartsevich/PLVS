let signInBtn = document.querySelector(".login");
let registrBtn = document.querySelector(".register");

let registrForm = document.getElementsByClassName("registerf")[0];
let loginForm = document.getElementsByClassName("loginf")[0]

signInBtn.addEventListener("click",()=>{
    getVisible(loginForm, registrForm);
});
registrBtn.addEventListener("click",()=>{
    getVisible(registrForm, loginForm);
});


function getVisible(elemOne, elemTwo) {
    elemOne.classList.toggle("visible");
    elemTwo.classList.remove("visible");

    
}