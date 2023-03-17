const btnValidation = document.querySelector("#btn-validation")

btnValidation.addEventListener("click", event => {
    event.preventDefault()

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message")

    const nameValue = name.value
    const emailValue = email.value
    const phoneValue = phone.value
    const messageValue = message.value

    
})