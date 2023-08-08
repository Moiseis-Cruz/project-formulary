const formulary = document.getElementById("formulary")

const divsValidation = document.querySelectorAll(".form-control")

const input = document.querySelectorAll("#name, #email, #phone, #message")

formulary.addEventListener("change", (e) => {
    e.preventDefault()

    input.forEach((input, i) => {
        if(input.value === ""){
            divsValidation[i].classList.add("invalid")
            divsValidation[i].classList.remove("enabled")
        }else{
            divsValidation[i].classList.remove("invalid")
            divsValidation[i].classList.add("enabled")
        }
    })
})

formulary.addEventListener("submit", (e) => {
    e.preventDefault()

    input.forEach((input, i) => {
        if(input.value === ""){
            divsValidation[i].classList.add("invalid")
            divsValidation[i].classList.remove("enabled")
        }else{
            divsValidation[i].classList.remove("invalid")
            divsValidation[i].classList.add("enabled")
        }
    })
})