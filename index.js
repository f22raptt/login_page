
// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form_message");
//     messageElement.textContent = message;
//     messageElement.classList.remove(".form_message-error", ".form_message-success");
//     messageElement.classList.add(".form_message-error");
// }

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {

    const LoginForm = document.querySelector("#Login");
    const Create = document.querySelector("#Create");

    document.querySelector("#LinkLogin").addEventListener("click", e => {
        e.preventDefault();
        LoginForm.classList.remove("form-hidden");
        Create.classList.add("form-hidden");



    });

    document.querySelector("#LinkCreateAccount").addEventListener("click", e => {

        e.preventDefault();
        LoginForm.classList.add("form-hidden");
        Create.classList.remove("form-hidden");
    });


    LoginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(LoginForm, "error", "Invalid username/password");

    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });



});



