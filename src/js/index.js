let userName = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let mensagem = document.getElementById("mensagem")

let formulary = document.querySelector("form[id='formulary']")

formulary.addEventListener("submit", function () {

    let itemInvalid = document.querySelectorAll(".campo")
    let itemEnabled = document.querySelector(".campo")

    if(userName === ""){
        itemInvalid.classList.add("invalid")
    }else{
        itemEnabled.classList.add("enabled")
    }
})