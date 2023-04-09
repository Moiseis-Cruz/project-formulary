const btnValidation = document.getElementById("btn-validation")

const divsValidation = document.querySelectorAll(".form-control")

const input = document.querySelectorAll("#name, #email, #phone, #message")

btnValidation.addEventListener("click", event => {
    event.preventDefault()

    input.forEach(function(input, i) {
        if(input.value === ""){
            divsValidation[i].classList.add("invalid")
        }else{
            divsValidation[i].classList.add("enabled")
        }
    })
})