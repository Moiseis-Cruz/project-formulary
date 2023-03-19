const btnValidation = document.querySelector("button[id='btn-validation']")

/*btnValidation.addEventListener("click", event => {
    event.preventDefault()

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message")

    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const messageValue = message.value.trim()

    if(nameValue === ""){
        errorValidation()
    }else{
        enabledValidation()
    }

    if(emailValue === ""){
        errorValidation()
    }else{
        enabledValidation()
    }
})*/

btnValidation.addEventListener("click", event => {
    event.preventDefault()

    checkInputs()
})

function checkInputs() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message")

    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const messageValue = message.value.trim()

    if(nameValue === ""){
        errorValidation(name)
    }else{
        enabledValidation(name)
    }

}

function errorValidation() {
    const formControl = document.querySelector(".form-control")
    // const smallInvalid = document.querySelector("warning")

    formControl.classList.add("invalid")
}

function enabledValidation() {
    const formControl = document.querySelector(".form-control")

    formControl.classList.add("enabled")
}