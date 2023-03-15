const btnValidation = document.getElementById("btn-validation")

let userName = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let message = document.getElementById("message")

btnValidation.addEventListener("submit", function(e) {
  
  e.preventDefault()

  checkinputs()
})

function checkinputs() {
  const userNameValue = userName.value.trim()

  const emailValue = email.value.trim()

  const phoneValue = phone.value.trim()

  const messageValue = message.value.trim()

  if(userNameValue === ""){
    invalidValidation()
  }
}


function invalidValidation() {

  let campo = document.querySelectorAll(".campo")

  console.log(campo);

  campo.classList.add("invalid")
}

function enabledValidation() {
  let enabled = document.querySelector(".enabled")

  
}